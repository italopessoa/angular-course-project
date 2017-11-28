import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { RecipeService } from "../recipes/recipe-list/recipe.service";
import 'rxjs/Rx';
import { Recipe } from "../recipes/recipe.model";
import { AuthService } from "../auth/auth.service";
import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';
import { Store } from "@ngrx/store";
import * as fromApp from '../store/app.reducers'
import * as RecipeActions from '../recipes/store/recipe.actions';

@Injectable()
export class DataStorageService {
  private fbServer: string = 'https://ng-recipe-book-4eb79.firebaseio.com/recipes.json?auth=';
  private fbServerNew: string = 'https://ng-recipe-book-4eb79.firebaseio.com/recipes.json';
  constructor(
    private http: Http,
    private recipeService: RecipeService,
    private authService: AuthService,
    private httpClient: HttpClient,
    private store: Store<fromApp.AppState>) { }

  storeRecipes() {
    // return this.http.put(this.fbServer+this.authService.token, this.recipeService.getRecipes());
    return this.http.put(this.fbServerNew, this.recipeService.getRecipes(), {
      // params: new HttpParams().set('auth', this.authService.getToken())
    });
  }
  storeRecipesV2() {
    // return this.httpClient.put(this.fbServer+this.authService.token, this.recipeService.getRecipes());
    // const request = new HttpRequest('PUT',this.fbServerNew,this.recipeService.getRecipes(), {
    //   reportProgress: true, params: new HttpParams().set('auth', this.authService.getToken())
    // });
    const request = new HttpRequest('PUT',this.fbServerNew,this.recipeService.getRecipes(), {
      reportProgress: true
    });
    return this.httpClient.request(request);
  }

  getRecipes() {
    return this.http.get(this.fbServer+this.authService.token)
      .map(
        (response: Response) => {
          const recipes: Recipe[] = response.json();
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
  getRecipesV2() {
    this.store.dispatch(new RecipeActions.FetchRecipes());
    // return this.httpClient.get<Recipe[]>(this.fbServerNew)
    //   .map(
    //     (recipes) => {
    //       for (let recipe of recipes) {
    //         if (!recipe['ingredients']) {
    //           recipe['ingredients'] = [];
    //         }
    //       }
    //       return recipes;
    //     }
    //   )
    //   .subscribe(
    //     (recipes: Recipe[]) => {
    //       this.recipeService.setRecipes(recipes);
    //     }
    //   );
  }
  getRecipesMap() {
    return this.http.get(this.fbServer+this.authService.token)
      .map(
      (response: Response) => {
        const data = response.json();
        return data;
      }
      );
  }
}
