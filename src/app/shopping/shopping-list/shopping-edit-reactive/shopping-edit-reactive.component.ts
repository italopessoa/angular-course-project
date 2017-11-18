import { Component, ViewChild, ElementRef, Output, EventEmitter, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Ingredient } from '../../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgModel } from '@angular/forms/src/directives/ng_model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-shopping-edit-reactive',
  templateUrl: './shopping-edit-reactive.component.html',
  styleUrls: ['shopping-edit-reactive.component.css']
})

export class ShoppingEditReactiveComponent implements OnInit {
  ingredientForm: FormGroup;
  forbiddenIngredientsArray = ['alface', 'soja'];

  constructor(private shoppingListService: ShoppingListService) { }

  addIngredient() {
    console.log(this.ingredientForm);

    // this.shoppingListService.addIngredient(new Ingredient(this.form.value.ingredientData.name, this.form.value.ingredientData.amount));
    // this.ingredientForm.reset();
  }

  ngOnInit() {
    this.ingredientForm = new FormGroup({
      'ingredientData': new FormGroup({
        'name': new FormControl(null, [Validators.required, this.forbiddenIngredients.bind(this)]),
        'amount': new FormControl(null, [Validators.required, Validators.max(10)],[this.noNegativeValidator])
      })
    });
  }

  forbiddenIngredients(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenIngredientsArray.indexOf(control.value) !== -1) return { 'ingredientIsForbidden': true };
    else return null;
  }
  noNegativeValidator(control: FormControl): Promise<any> | Observable<any> {
    return new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value < 0) {
          resolve({ 'valueIsNegative': true });
        } else {
          resolve(null);
        }
      }, 10)
    });
  }
}
