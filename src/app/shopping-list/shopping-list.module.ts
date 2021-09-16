import { NgModule } from '@angular/core';

import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingItemComponent } from './shopping-item/shopping-item.component';
import { ShoppingListComponent } from './shopping-list.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  imports: [
    FormsModule,
    RouterModule.forChild([{ path: '', component: ShoppingListComponent }]),
    SharedModule,
  ],
  declarations: [
    ShoppingEditComponent,
    ShoppingListComponent,
    ShoppingItemComponent,
  ],
})
export class ShoppingListModule {}
