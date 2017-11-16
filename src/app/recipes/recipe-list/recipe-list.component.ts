import { Component, OnInit, ViewEncapsulation, EventEmitter, Output } from '@angular/core';
import { Recipe } from "../recipe.model";
import { RecipeService } from './recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = []
  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  onRecipeSelected(recipeIndex: number) {
    this.recipeService.onRecipeSelected.emit(this.recipes[recipeIndex]);
  }

  newRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
