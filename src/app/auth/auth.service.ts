import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { BehaviorSubject, Subject, throwError } from 'rxjs';
import { User } from './user.model';

export interface AuthResponseData{
    idToken:string,
    email:string,
    refreshToken:string,
    expiresIn:string,
    localId:string,
    registered?:boolean
}

@Injectable({
    providedIn:'root'
})
export class AuthService{
    use : any = null;
    user = new BehaviorSubject<User>(this.use);
    constructor(private http:HttpClient){

    }
    signup(email:string,password:string){
        return this.http.post<AuthResponseData>(`
            https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD_nmn-s7aWA4QIN8W47krXPJlhz64LS1c`,{
            email,
            password,
            "returnSecureToken":true
            }
        )
        .pipe(
            catchError(this.handleError),
            tap((resData:any)=>{    
                this.handleAuthentication(resData.email,resData.localId,resData.tokenId,resData.expiresIn);
            })
        );
    }

    login(email:string,password:string){
        return this.http.post<AuthResponseData>(`
            https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD_nmn-s7aWA4QIN8W47krXPJlhz64LS1c`,{
            email,
            password,
            "returnSecureToken":true
            }
        )
        .pipe(
            catchError(this.handleError),
            tap((resData:any)=>{    
                this.handleAuthentication(resData.email,resData.localId,resData.idToken,resData.expiresIn);
            })
        )
    }
    private handleAuthentication(email:string, userId:string,token:string,expiresIn:string){
        const expirationDate = new Date(new Date().getTime() + +expiresIn * 1000);
        const user = new User(email, userId, token, expirationDate);
        this.user.next(user);
    }
    private handleError(errorRes: HttpErrorResponse){
        let errorMessage = 'An unknown error occured!';
            if(!errorRes.error || !errorRes.error.error){
                return throwError(errorMessage);
            }
            switch(errorRes.error.error.message){
                case "EMAIL_EXISTS":
                    errorMessage = "This Email is already Exist";
                    break;
                case "EMAIL_NOT_FOUND":
                    errorMessage = "User Does Not Exist";
                    break;
                case "INVALID_PASSWORD":
                    errorMessage = "Password Invalid";
                    break;
            }
            return throwError(errorMessage);
    }
}