import { Effect, Actions } from "@ngrx/effects";
import * as RecipeActions from './recipe.actions';
import 'rxjs/add/operator/switchMap';
import { HttpClient } from '@angular/common/http';
import { Recipe } from "../recipe.model";
import { Injectable } from "@angular/core";

@Injectable()
export class RecipeEffects {

  private fbServerNew: string = 'https://ng-recipe-book-4eb79.firebaseio.com/recipes.json';
  constructor(
    private actions$: Actions,
    private httpClient: HttpClient) {
  }

  @Effect()
  recipeFetch = this.actions$
    .ofType(RecipeActions.FETCH_RECIPES)
    .switchMap((action: RecipeActions.FetchRecipes) => {
      return this.httpClient.get<Recipe[]>(this.fbServerNew)
    })
    .map(
      (recipes) => {
        console.log('.map(')
        for (let recipe of recipes) {
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        }
        return {
          type: RecipeActions.SET_RECIPES,
          payload: recipes,
        };
      }
    );
}
