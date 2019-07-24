import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';
import {Ingredient} from '../shared/integredient.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe'
      , 'This is simply a test'
      , 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
      , [new Ingredient('Meat', 1)
                  , new Ingredient('French Fries', 20)]),
    new Recipe('Another Test Recipe'
      , 'This is simply a test'
      , 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [new Ingredient('Buns', 2)
        , new Ingredient('Meat', 2)])
  ];
  public recipeSelected = new EventEmitter<Recipe>();

  getServices() {
    return this.recipes.slice();
  }
}
