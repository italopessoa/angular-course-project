import { Component, ViewChild, ElementRef, Output, EventEmitter, OnInit } from '@angular/core'
import { NgForm } from "@angular/forms";
import { Ingredient } from '../../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgModel } from '@angular/forms/src/directives/ng_model';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../store/shopping-list.actions';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['shopping-edit.component.css']
})

export class ShoppingEditComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  editMode: boolean = false;
  editedIngredient: Ingredient;
  @ViewChild('ingredientForm') form: NgForm;

  constructor(private shoppingListService: ShoppingListService, private store: Store<{shoppingList: {ingredients: Ingredient[]}}>) { }

  addIngredient() {
    if (this.editMode) {
      this.editedIngredient.name = this.form.value.ingredientData.name;
      this.editedIngredient.amount = this.form.value.ingredientData.amount;
      this.shoppingListService.updateIngredient(this.editedIngredient);
    } else {
      // this.shoppingListService.addIngredient(new Ingredient(this.form.value.ingredientData.name, this.form.value.ingredientData.amount));
      this.store.dispatch(new ShoppingListActions.AddIngredient(new Ingredient(this.form.value.ingredientData.name, this.form.value.ingredientData.amount)));
    }
    this.resetForm();
  }
  resetForm() {
    this.form.reset();
    this.editMode = false;
    this.editedIngredient = null;
  }
  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (ingredientId: number) => {
        this.editMode = true;
        this.editedIngredient = this.shoppingListService.getIngredient(ingredientId);
        console.log(this.editedIngredient);
        this.form.setValue({
          ingredientData:
            {
              name: this.editedIngredient.name,
              amount: this.editedIngredient.amount
            }
        })
      }
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.editedIngredient.id);
    this.resetForm();
  }
}
