import { Recipe } from "../recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../../shared/ingredient.model";
import { ShoppingListService } from "../../shopping/shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  onRecipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();
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
    new Recipe('Sauduíche de ovo', 'Fácil, rápido e barato', '../../../assets/tr.jpg', [
      new Ingredient("Pão", 1),
      new Ingredient("Ovo", 2),
      new Ingredient("Orégano", 1),
      new Ingredient("Sal", 1)
    ]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes = () => this.recipes.slice();
  addIngredientsToShoppingList = (ingredients: Ingredient[]) => {
    this.shoppingListService.addIngredients(ingredients);
  }
}
