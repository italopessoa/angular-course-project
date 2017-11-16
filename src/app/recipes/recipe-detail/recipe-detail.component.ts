import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import { RecipeService } from '../recipe-list/recipe.service';
import { ActivatedRoute, Params, Data } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.route.params.subscribe(
    //   (params: Params) => {
    //     console.log(params['id']);
    //     this.recipe = this.recipeService.getRecipe(+params['id']);
    //   }
    // );
    this.route.data.subscribe(
      (data: Data) => {
        this.recipe = data['recipe'];
      }
    );
  }
  addIngredientsToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
