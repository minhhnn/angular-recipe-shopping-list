import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from '../shared/integredient.model';
import {ShoppingListService} from './shopping-list.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private ingredientChangeSub: Subscription;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.ingredientChangeSub = this.shoppingListService.ingredientChanged
      .subscribe((ingredientList: Ingredient[]) => this.ingredients = ingredientList);
  }

  ngOnDestroy(): void {
    this.ingredientChangeSub.unsubscribe();
  }
}
