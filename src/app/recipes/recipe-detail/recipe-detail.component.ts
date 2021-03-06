import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import { RecipeService } from '../recipe-list/recipe.service';
import { ActivatedRoute, Params, Data, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

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

  onEdit() {
    this.router.navigate(['../', 'edit'], { relativeTo: this.route });
  }

  onDelete(){
    this.recipeService.deleteRecipe(this.recipe.id);
    this.router.navigate(['recipes']);
  }
}
