import { Component, OnInit, ViewEncapsulation, EventEmitter, Output } from '@angular/core';
import { Recipe } from "../recipe.model";
import { RecipeService } from './recipe.service';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecipeListComponent implements OnInit {
  @Output() recipeItemSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();
  recipes: Recipe[] = []
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  onRecipeSelected(recipeIndex: number) {
    this.recipeItemSelected.emit(this.recipes[recipeIndex]);
  }

}
