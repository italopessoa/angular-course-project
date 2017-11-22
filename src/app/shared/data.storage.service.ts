import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { RecipeService } from "../recipes/recipe-list/recipe.service";
import 'rxjs/Rx';
import { Recipe } from "../recipes/recipe.model";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class DataStorageService {
  private fbServer: string = 'https://ng-recipe-book-4eb79.firebaseio.com/recipes.json?auth=';
  constructor(private http: Http, private recipeService: RecipeService,private authService: AuthService) { }

  storeRecipes() {
    return this.http.put(this.fbServer+this.authService.token, this.recipeService.getRecipes());
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
