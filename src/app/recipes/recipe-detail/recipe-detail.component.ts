import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import { RecipeService } from '../recipe-list/recipe.service';
import { ActivatedRoute, Params, Data, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../../shopping/shopping-list/store/shopping-list.actions';
import * as fromApp from '../../store/app.reducers';
import { Observable } from 'rxjs/Observable';
import * as fromRecipe from '../store/recipe.reducers';
import * as RecipeActions from '../store/recipe.actions'
import { RecipesComponent } from '../recipes.component';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  recipeId: number;
  recipeState: Observable<fromRecipe.State>
  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute, private router: Router,
    private store: Store<fromRecipe.FeatureState>) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        console.log(params['id']);
        // this.recipe = this.recipeService.getRecipe(+params['id']);
        this.recipeId = +params['id'];
        this.store.dispatch(new RecipeActions.SelectRecipe(+params['id']));
        this.recipeState = this.store.select('recipes');
      }
    );
    // this.route.data.subscribe(
    //   (data: Data) => {
    //     this.recipe = data['recipe'];
    //   }
    // );
  }
  addIngredientsToShoppingList() {
    // this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
    // this.store.dispatch(new ShoppingListActions.AddIngredients(this.recipe.ingredients));
    this.store.select('recipes')
      .take(1)
      .subscribe((recipeState: fromRecipe.State) => {
        // this.recipe = recipeState.selectedRecipe;
        this.store.dispatch(new ShoppingListActions.AddIngredients(recipeState.selectedRecipe.ingredients));
      });
  }

  onEdit() {
    this.router.navigate(['../', 'edit'], { relativeTo: this.route });
  }

  onDelete() {
    this.store.dispatch(new RecipeActions.DeleteRecipe(this.recipeId))
    // this.recipeService.deleteRecipe(this.recipe.id);
    this.router.navigate(['recipes']);
  }
}
