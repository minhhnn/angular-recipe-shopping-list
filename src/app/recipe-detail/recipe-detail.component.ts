import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import {Ingredient} from '../shared/integredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {ActivatedRoute, Params} from '@angular/router';
import {RecipeService} from '../recipes/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  private recipe: Recipe;
  private id: number;

  constructor(private shoppingListService: ShoppingListService,
              private recipeService: RecipeService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipe = this.recipeService.getRecipe(this.id);
    });
  }

  addToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addToShoppingList(ingredients);
  }

}
