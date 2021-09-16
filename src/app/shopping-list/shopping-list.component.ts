import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoggingService } from '../logging.service';

import { Ingredient } from '../shared/ingredients.model';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private igChanged: Subscription;
  constructor(
    private shoppingService: ShoppingService,
    private loggingService: LoggingService
  ) {}

  ngOnInit() {
    this.loggingService.printLog('Hello from ShoppingList Component');
    this.ingredients = this.shoppingService.getIngredients();
    this.igChanged = this.shoppingService.ingredientChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }
  onEditItem(index: number) {
    this.shoppingService.startedEditing.next(index);
  }
  ngOnDestroy() {
    this.igChanged.unsubscribe();
  }
}
