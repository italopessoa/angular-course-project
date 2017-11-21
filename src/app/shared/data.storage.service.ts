import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { RecipeService } from "../recipes/recipe-list/recipe.service";
import 'rxjs/Rx';
import { Response } from "@angular/http/src/static_response";

@Injectable()
export class DataStorageService {
  private fbServer: string = 'https://ng-recipe-book-4eb79.firebaseio.com/recipes.json';
  constructor(private http: Http, private recipeService: RecipeService) { }

  storeRecipes() {
    return this.http.put(this.fbServer, this.recipeService.getRecipes());
  }

  getRecipes() {
    return this.http.get(this.fbServer);
  }
  getRecipesMap() {
    return this.http.get(this.fbServer)
      .map(
        (response: Response) => {
          const data = response.json();
          return data;
        }
      );
  }
}
