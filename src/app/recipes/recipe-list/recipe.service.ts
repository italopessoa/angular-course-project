import { Recipe } from "../recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../../shared/ingredient.model";
import { ShoppingListService } from "../../shopping/shopping-list/shopping-list.service";
import { Subject } from "rxjs/Subject";
import { Http } from "@angular/http";

@Injectable()
export class RecipeService {

  onRecipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();
  onRecipesChanged: Subject<Recipe[]> = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    // new Recipe('A test recipe 1', 'This is simply a test 1', 'http://www.seriouseats.com/recipes/assets_c/2015/01/20150119-pressure-cooker-chicken-stew-food-lab-11-thumb-1500xauto-418088.jpg'),
    // new Recipe('A test recipe 2', 'This is simply a test 2', 'http://www.seriouseats.com/recipes/assets_c/2015/01/20150119-pressure-cooker-chicken-stew-food-lab-11-thumb-1500xauto-418088.jpg'),
    // new Recipe('A test recipe 3', 'This is simply a test 3', 'http://www.seriouseats.com/recipes/assets_c/2015/01/20150119-pressure-cooker-chicken-stew-food-lab-11-thumb-1500xauto-418088.jpg')
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
  ];

  constructor(private shoppingListService: ShoppingListService, private http: Http) { }

  getRecipe(id: number) {
    const index = this.recipes.findIndex(r => r.id === id);
    return Object.assign({}, this.recipes[index]);
  }

  getRecipes = () => this.recipes.slice();

  addIngredientsToShoppingList = (ingredients: Ingredient[]) => {
    this.shoppingListService.addIngredients(ingredients);
  }

  onRecipeChangedNotify() {
    this.onRecipesChanged.next(this.recipes.slice());
  }
  addRecipe(recipe: Recipe) {
    recipe['id'] = new Date().getTime() * Math.random();
    this.recipes.push(recipe);
    console.log(recipe)
    this.onRecipeChangedNotify();
  }
  updateRecipe(recipe: Recipe) {
    console.log(recipe)
    this.recipes[this.recipes.findIndex(r => r.id === recipe.id)] = recipe;
    this.onRecipeChangedNotify();
  }
  deleteRecipe(recipeId: number) {
    console.log(recipeId);
    this.recipes.splice(this.recipes.findIndex(r => r.id === recipeId), 1);
    this.onRecipeChangedNotify();
  }
  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.onRecipeChangedNotify();
  }
}
