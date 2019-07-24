import {Ingredient} from '../shared/integredient.model';

export class Recipe {
  constructor(public name: string, public description: string
              , public imagePath: string, public ingredients: Ingredient[]) {

  }
}
