import { Component, Output, EventEmitter } from '@angular/core';
import { RecipeService } from '../recipes/recipe-list/recipe.service';
import { DataStorageService } from '../shared/data.storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  @Output() onChangeView: EventEmitter<string> = new EventEmitter<string>();

  constructor(private dataStorageService: DataStorageService) {

  }
  changeView(view: string) {
    this.onChangeView.emit(view);
  }
  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }
}
