import { Action } from "@ngrx/store";
import { Ingredient } from "../../../shared/ingredient.model";
import * as ShoppingListActions from "./shopping-list.actions";

export interface AppState {
  shoppingList: State
}
export interface State {
  ingredients: Ingredient[],
  editedIngredient: Ingredient,
  editedIngredientIndex: number,
}

const initialState: State = {
  ingredients: [
    new Ingredient('Maça', 2),
    new Ingredient('Laranja', 10)
  ],
  editedIngredient: null,
  editedIngredientIndex: -1,
}
export function shopppingListReducer(state = initialState, action: ShoppingListActions.ShoppingListActions) {
  switch (action.type) {
    case ShoppingListActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload]
      };
    case ShoppingListActions.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: [...state.ingredients, ...action.payload]
      };
    case ShoppingListActions.UPDATE_INGREDIENT:
      const index = state.ingredients.findIndex(i => i.id === action.payload.id);
      const ingredient = state.ingredients[index];
      const updatedIngredient = {
        ...ingredient,
        ...action.payload
      }
      const ingredients = [...state.ingredients];
      ingredients[index] = action.payload;
      return {
        ...state,
        ingredients: ingredients
      }
    case ShoppingListActions.DELETE_INGREDIENT:
      const oldIngredients = [...state.ingredients];
      oldIngredients.splice(oldIngredients.findIndex(i => i.id === action.payload), 1)
      return {
        ...state,
        ingredients: oldIngredients
      };
    case ShoppingListActions.START_EDIT:
      const editedIngredientIndex = state.ingredients.findIndex(i => i.id === action.payload);
      const editedIngredient = { ...state.ingredients[editedIngredientIndex] };
      return {
        ...state,
        editedIngredient: editedIngredient,
        editedIngredientIndex: editedIngredientIndex
      }
    default:
      return state;
  }
}
