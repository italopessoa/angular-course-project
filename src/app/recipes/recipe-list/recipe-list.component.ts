import { Component, OnInit, ViewEncapsulation, EventEmitter, Output } from '@angular/core';
import { Recipe } from "../recipe.model";
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecipeListComponent implements OnInit {
  @Output() recipeItemSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    // new Recipe('A test recipe 1', 'This is simply a test 1', 'http://www.seriouseats.com/recipes/assets_c/2015/01/20150119-pressure-cooker-chicken-stew-food-lab-11-thumb-1500xauto-418088.jpg'),
    // new Recipe('A test recipe 2', 'This is simply a test 2', 'http://www.seriouseats.com/recipes/assets_c/2015/01/20150119-pressure-cooker-chicken-stew-food-lab-11-thumb-1500xauto-418088.jpg'),
    // new Recipe('A test recipe 3', 'This is simply a test 3', 'http://www.seriouseats.com/recipes/assets_c/2015/01/20150119-pressure-cooker-chicken-stew-food-lab-11-thumb-1500xauto-418088.jpg')
    new Recipe('A test recipe 1', 'This is simply a test 1', '../../../assets/tr.jpg'),
    new Recipe('A test recipe 2', 'This is simply a test 2', '../../../assets/tr.jpg'),
    new Recipe('A test recipe 3', 'This is simply a test 3', '../../../assets/tr.jpg')

  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipeIndex: number) {
    this.recipeItemSelected.emit(this.recipes[recipeIndex]);
  }

}
