import { Ingredient } from "../../shared/ingredient.model";
import { EventEmitter } from "@angular/core";

export class ShoppingListService {
  ingredientsChanged: EventEmitter<Ingredient[]> = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  onIngredientChangedNotify(){
    this.ingredientsChanged.emit(this.ingredients.slice())
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
