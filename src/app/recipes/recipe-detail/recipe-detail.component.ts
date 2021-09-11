import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { ShoppingService } from '../../shopping-list/shopping.service';
import { RecipeService } from '../recipe.service';
import { Recipe } from './../recipe.modal';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  displayRecipe: Recipe;
  id: number;
  constructor(
    private shoppingService: ShoppingService,
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.displayRecipe = this.recipeService.getRecipe(this.id);
    });
  }

  onAddShopping() {
    // for (let i of this.displayRecipe.ingredient) {
    //   this.shoppingService.addIngredient(i);
    // }
    this.shoppingService.addIngredients(this.displayRecipe.ingredient);
  }
  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }
  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['recipes']);
  }
}
