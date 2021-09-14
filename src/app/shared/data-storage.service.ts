import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map , tap, take, exhaustMap } from "rxjs/operators";

import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.modal";
import { AuthService } from "../auth/auth.service";

@Injectable({
    providedIn:'root'
})
export class DataStorageService{
    constructor(private http:HttpClient,private recipeService: RecipeService,private authService:AuthService){}

    storeRecipes(){
        const recipe= this.recipeService.getRecipes();
        this.http.put('https://recipebook-98949-default-rtdb.firebaseio.com/recipes.json',recipe).subscribe(response=>{
            console.log(response);
        })
    }

    fetchRecipes(){
        return this.authService.user.pipe(take(1), exhaustMap(user =>{
            return this.http.get<Recipe[]>('https://recipebook-98949-default-rtdb.firebaseio.com/recipes.json?auth='+user.token)
        }),map(recipes=>{
            return recipes.map((recipe)=>{
                return {...recipe,ingredient:recipe.ingredient?recipe.ingredient:[]
                };
            });
        }),
        tap(recipes=>{
            this.recipeService.setRecipe(recipes);
        })
        )
        
        
       
    }
}