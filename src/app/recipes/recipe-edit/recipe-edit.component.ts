import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from "../recipe-list/recipe.service";
import { log } from 'util';
import { validateConfig } from '@angular/router/src/config';
import { Recipe } from '../recipe.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecipeEditComponent implements OnInit {
  recipeId: number;
  editMode: boolean = false;
  recipeForm: FormGroup;
  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.recipeId = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );
  }

  private initForm() {
    let recipeName = '';
    let recipeDescription = '';
    let recipeImagePath = '';
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.recipeId);
      console.log(recipe)
      recipeName = recipe.name;
      recipeDescription = recipe.description;
      recipeImagePath = recipe.imagePath;
      if (recipe['ingredients']) {
        for (let ingredient of recipe.ingredients) {
          recipeIngredients.push(new FormGroup({
            'name': new FormControl(ingredient.name, Validators.required),
            'amount': new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
          }));
        }
      }
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'ingredients': recipeIngredients,
    });
  }
  onSubmit() {
    const newRecipe = new Recipe(
      this.recipeForm.value['name'],
      this.recipeForm.value['description'],
      this.recipeForm.value['imagePath'],
      this.recipeForm.value['ingredients']);
    if (this.editMode) {
      newRecipe.id = this.recipeId;
      this.recipeService.updateRecipe(newRecipe);
    } else {
      this.recipeService.addRecipe(this.recipeForm.value);
    }
    this.recipeForm.reset();
    this.recipeId = -1;
    this.onLeave();
  }
  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
      'name': new FormControl(null, Validators.required),
      'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
    }));
  }
  onLeave() {
    if (this.editMode) {
      this.router.navigate(['../detail'], { relativeTo: this.route });
    } else {
      this.router.navigate(['recipes']);
    }
  }
  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }
  getControls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }
}
