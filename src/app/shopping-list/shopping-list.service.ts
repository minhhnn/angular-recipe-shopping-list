import {Ingredient} from '../shared/integredient.model';
import {Subject} from 'rxjs';

export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];
  ingredientChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  getIngredients() {
    return this.ingredients.slice();
  }
  getIngredient(id: number): Ingredient {
    return this.ingredients[id];
  }
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.next(this.ingredients.slice());
  }
  updateIngredient(id: number, updatedIngredient: Ingredient) {
    this.ingredients[id] = updatedIngredient;
    this.ingredientChanged.next(this.ingredients.slice());
  }
  deleteIngredient(id: number) {
    this.ingredients.splice(id, 1);
    this.ingredientChanged.next(this.ingredients.slice());
  }
  addToShoppingList(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientChanged.next(this.ingredients.slice());
  }
}
