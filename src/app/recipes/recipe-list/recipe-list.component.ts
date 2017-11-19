import { Component, OnInit, ViewEncapsulation, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Recipe } from "../recipe.model";
import { RecipeService } from './recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[] = []
  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) { }
  subscription: Subscription;

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.subscription = this.recipeService.onRecipesChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    )
  }

  onRecipeSelected(recipeIndex: number) {
    this.recipeService.onRecipeSelected.emit(this.recipes[recipeIndex]);
  }

  newRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
