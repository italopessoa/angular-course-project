import { Component, ViewChild, ElementRef, Output, EventEmitter, OnInit } from '@angular/core'
import { NgForm } from "@angular/forms";
import { Ingredient } from '../../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgModel } from '@angular/forms/src/directives/ng_model';

@Component({
  selector: 'app-shopping-edit-td',
  templateUrl: './shopping-edit-td.component.html',
  styleUrls: ['shopping-edit-td.component.css']
})

export class ShoppingEditTemplateDrivenComponent implements OnInit {
  @ViewChild('ingredientForm') form: NgForm;

  constructor(private shoppingListService: ShoppingListService) { }

  addIngredient() {
    console.log(this.form);

    this.shoppingListService.addIngredient(new Ingredient(this.form.value.ingredientData.name, this.form.value.ingredientData.amount));
  }

  ngOnInit() { }
}
