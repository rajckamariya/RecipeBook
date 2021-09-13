import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredients.model';
import { Recipe } from './recipe.modal';
@Injectable()
export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();
  // recipes: Recipe[] = [
  //   new Recipe(
  //     'Test-1',
  //     'This is test',
  //     'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/easy-cheap-dinners-weeknight-1604466210.jpg?crop=0.502xw:1.00xh;0.498xw,0&resize=640:*',
  //     [new Ingredient('Tomatoes', 3), new Ingredient('Onion', 4)]
  //   ),
  //   new Recipe(
  //     'Test 2',
  //     'Test 2 Simple',
  //     'https://www.eatthis.com/wp-content/uploads/sites/4/2021/08/chicken-thigh-tzatziki-bowl.jpg?quality=82&strip=all&w=640&h=468&crop=1',
  //     [
  //       new Ingredient('Onion', 5),
  //       new Ingredient('Lemon', 1),
  //       new Ingredient('Tomatoes', 4)
  //     ]
  //   )
  // ];
  recipes:Recipe[]=[];
  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(id: number) {
    return this.recipes.slice()[id];
  }
  setRecipe(recipe:Recipe[])
  {
    this.recipes = recipe;
    this.recipeChanged.next(this.recipes.slice());
  }
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }
  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }
  constructor() {}
}
