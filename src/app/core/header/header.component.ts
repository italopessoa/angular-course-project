import { Component, Output, EventEmitter } from '@angular/core';
import { RecipeService } from '../../recipes/recipe-list/recipe.service';
import { DataStorageService } from '../../shared/data.storage.service';
import { Response } from '@angular/http';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  @Output() onChangeView: EventEmitter<string> = new EventEmitter<string>();

  constructor(private dataStorageService: DataStorageService, private authService: AuthService) {

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
  onFetchData() {
    // this.dataStorageService.getRecipesMap()
    // .subscribe(
    //   (recipes: any[]) => {
    //     console.log(recipes);
    // });

    this.dataStorageService.getRecipes();
    // .subscribe(
    // (response: Response) => console.log(response.json()),
    // (error) => console.log(error)
    // );
  }
  onLogout() {
    this.authService.logout();
  }

  getUserName = () => this.authService.getUserName();
  isAuthenticated = () => this.authService.isAuthenticated();
}
