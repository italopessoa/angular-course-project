import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { RecipeService } from '../../recipes/recipe-list/recipe.service';
import { DataStorageService } from '../../shared/data.storage.service';
import { Response } from '@angular/http';
import { AuthService } from '../../auth/auth.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromApp from '../../store/app.reducers';
import * as fromAuth from '../../auth/store/auth.reducers';
import * as AuthActions from '../../auth/store/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  authState: Observable<fromAuth.State>;
  @Output() onChangeView: EventEmitter<string> = new EventEmitter<string>();

  constructor(private dataStorageService: DataStorageService, private authService: AuthService,
    private store: Store<fromApp.AppState>) {
  }

  ngOnInit() {
    this.authState = this.store.select('auth');
    this.store.select('auth').map((authState: fromAuth.State) => {
      console.log('authState.userName', authState.userName);
    });
  }

  changeView(view: string) {
    this.onChangeView.emit(view);
  }
  onSaveData() {
    // this.dataStorageService.storeRecipes()
    this.dataStorageService.storeRecipesV2()
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

    // this.dataStorageService.getRecipes();
    this.dataStorageService.getRecipesV2();
    // .subscribe(
    // (response: Response) => console.log(response.json()),
    // (error) => console.log(error)
    // );
  }
  onLogout() {
    // this.authService.logout();
    this.store.dispatch(new AuthActions.Logout());
  }


  // getUserName = () => this.authService.getUserName();
  isAuthenticated = () => this.authService.isAuthenticated();

  getUserName() {
    return this.authState.map(
      (authState: fromAuth.State) => {
        return authState.userName;
      }
    );
  }
}
