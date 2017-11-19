import { Ingredient } from "../../shared/ingredient.model";
import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs/Subject";

export class ShoppingListService {
  ingredientsChanged: Subject<Ingredient[]> = new Subject<Ingredient[]>();
  startedEditing: Subject<number> = new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  onIngredientChangedNotify() {
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
  getIngredient(ingredientId: number) {
    return this.ingredients.find(i => i.id === ingredientId);
  }
  updateIngredient(ingredient: Ingredient) {
    this.ingredients[this.ingredients.findIndex(i => i.id === ingredient.id)] = ingredient;
    this.onIngredientChangedNotify();
  }

  deleteIngredient(ingredientId: number) {
    this.ingredients.splice(this.ingredients.findIndex(i => i.id === ingredientId), 1);
    this.onIngredientChangedNotify();
  }
}
