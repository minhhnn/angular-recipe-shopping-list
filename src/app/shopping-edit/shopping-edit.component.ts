import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../shared/integredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private editedItemIndex: number;
  private editMode = false;
  private editedItem: Ingredient;

  @ViewChild('f', {static: false}) form: NgForm;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing
      .subscribe((id: number) => {
        this.editMode = true;
        this.editedItemIndex = id;
        this.editedItem = this.shoppingListService.getIngredient(id);
        this.form.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit(form: NgForm) {
    const ingredientName = form.value.name;
    const ingredientAmount = form.value.amount;
    const newIngredient = new Ingredient(ingredientName, ingredientAmount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
      this.shoppingListService.addIngredient(newIngredient);
    }
    this.resetForm();
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
  }
  resetForm() {
    this.form.reset();
    this.editMode = false;
  }
}
