import { Recipe } from "../recipe.model";

export class RecipeService {
  private recipes: Recipe[] = [
    // new Recipe('A test recipe 1', 'This is simply a test 1', 'http://www.seriouseats.com/recipes/assets_c/2015/01/20150119-pressure-cooker-chicken-stew-food-lab-11-thumb-1500xauto-418088.jpg'),
    // new Recipe('A test recipe 2', 'This is simply a test 2', 'http://www.seriouseats.com/recipes/assets_c/2015/01/20150119-pressure-cooker-chicken-stew-food-lab-11-thumb-1500xauto-418088.jpg'),
    // new Recipe('A test recipe 3', 'This is simply a test 3', 'http://www.seriouseats.com/recipes/assets_c/2015/01/20150119-pressure-cooker-chicken-stew-food-lab-11-thumb-1500xauto-418088.jpg')
    new Recipe('A test recipe 1', 'This is simply a test 1', '../../../assets/tr.jpg'),
    new Recipe('A test recipe 2', 'This is simply a test 2', '../../../assets/tr.jpg'),
    new Recipe('A test recipe 3', 'This is simply a test 3', '../../../assets/tr.jpg')
  ];

  getRecipes = () => this.recipes.slice();
}
