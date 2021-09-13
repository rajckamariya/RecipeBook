import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map , tap } from "rxjs/operators";

import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.modal";

@Injectable({
    providedIn:'root'
})
export class DataStorageService{
    constructor(private http:HttpClient,private recipeService: RecipeService){}

    storeRecipes(){
        const recipe= this.recipeService.getRecipes();
        this.http.put('https://recipebook-98949-default-rtdb.firebaseio.com/recipes.json',recipe).subscribe(response=>{
            console.log(response);
        })
    }

    fetchRecipes(){
        return this.http.get<Recipe[]>('https://recipebook-98949-default-rtdb.firebaseio.com/recipes.json')
        .pipe(
            map(recipes=>{
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