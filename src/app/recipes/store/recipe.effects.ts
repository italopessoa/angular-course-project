import { Effect, Actions } from "@ngrx/effects";
import * as RecipeActions from './recipe.actions';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/withLatestFrom';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Recipe } from "../recipe.model";
import { Injectable } from "@angular/core";
import * as fromFeature from './recipe.reducers';
import { Store } from "@ngrx/store";
@Injectable()
export class RecipeEffects {

  private fbServerNew: string = 'https://ng-recipe-book-4eb79.firebaseio.com/recipes.json';
  constructor(
    private actions$: Actions,
    private httpClient: HttpClient,
    private store: Store<fromFeature.FeatureState>) {
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

  @Effect({ dispatch: false })
  recipeStore = this.actions$
    .ofType(RecipeActions.STORE_RECIPES)
    .withLatestFrom(this.store.select('recipes'))
    .switchMap(([action, state]) => {
      const request = new HttpRequest('PUT', this.fbServerNew, state.recipes,{
        reportProgress: true
      });
      return this.httpClient.request(request);
    });
}
