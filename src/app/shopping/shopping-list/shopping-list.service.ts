import { Ingredient } from "../../shared/ingredient.model";
import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs/Subject";

export class ShoppingListService {
  ingredientsChanged: Subject<Ingredient[]> = new Subject<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  onIngredientChangedNotify(){
    this.ingredientsChanged.next(this.ingredients.slice())
  }
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.onIngredientChangedNotify();
  }
  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.onIngredientChangedNotify();
  }

  getIngredients = () => this.ingredients.slice();
}
