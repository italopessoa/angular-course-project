import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core'
import { Ingredient } from '../../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['shopping-edit.component.css']
})

export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() onIngredientAdded: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();
  addIngredient() {
    if (this.nameInputRef.nativeElement.value && this.amountInputRef.nativeElement.value && this.amountInputRef.nativeElement.value > 0){
      this.onIngredientAdded.emit(new Ingredient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value));
    }
  }
}
