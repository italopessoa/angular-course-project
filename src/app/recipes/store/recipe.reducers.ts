import { Recipe } from "../recipe.model";
import { Ingredient } from "../../shared/ingredient.model";
import { initializeApp } from "firebase";
import * as RecipeActions from "./recipe.actions";

export interface FeatureState {
  recipes: State
}
export interface State {
  recipes: Recipe[]
}
const initialState: State = {
  recipes: [
    new Recipe('Baião de 2', 'Baião é muito bom!', '../../../assets/tr.jpg',
      [
        new Ingredient("Arroz", 1),
        new Ingredient("Feijão", 1),
        new Ingredient("Queijo", 3)
      ]
    ),
    new Recipe('Sanduíche de ovo', 'Fácil, rápido e barato', '../../../assets/tr.jpg', [
      new Ingredient("Pão", 1),
      new Ingredient("Ovo", 2),
      new Ingredient("Orégano", 1),
      new Ingredient("Sal", 1)
    ]
    )
  ]
}

export function recipeReducer(state = initialState, action: RecipeActions.RecipeActions) {
  switch (action.type) {
    case RecipeActions.SET_RECIPES:
      return {
        ...state,
        recipes: [...action.payload]
      }
    case RecipeActions.ADD_RECIPE:
      return {
        ...state,
        recipes: [...state.recipes, action.payload]
      }
    case RecipeActions.UPDATE_RECIPE:
      const updateRecipeIndex = state.recipes.findIndex(r => r.id === action.payload.id);
      const actualRecipe = state.recipes[updateRecipeIndex];
      const updatedRecipe = {
        ...actualRecipe,
        ...action.payload
      }
      const recipes = [...state.recipes]
      recipes[updateRecipeIndex] = updatedRecipe;
      return {
        ...state,
        recipes: recipes
      }
    case RecipeActions.DELETE_RECIPE:
      const oldRecipes = [...state.recipes]
      oldRecipes.splice(oldRecipes.findIndex(r => r.id === action.payload));
      return {
        ...state,
        recipes: oldRecipes
      }
    default:
      return state
  }
}
