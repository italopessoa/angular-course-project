import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from "./shopping/shopping-list/shopping-edit/shopping-edit.component";
import { ShoppingEditTemplateDrivenComponent } from "./shopping/shopping-list/shopping-edit-td/shopping-edit-td.component";
// import { ShoppingEditReactiveComponent } from "./shopping/shopping-list/shopping-edit-reactive/shopping-edit-reactive.component";
import { ShoppingListService } from './shopping/shopping-list/shopping-list.service';
import { RecipeService } from './recipes/recipe-list/recipe.service';
import { RoutingModule } from './routing.module';
import { RecipeResolver } from './recipes/recipe-list/recipe-resolver.service';
import { HttpModule } from '@angular/http';
import { DataStorageService } from './shared/data.storage.service';
import { SiginComponent } from './auth/sigin/sigin.component';
import { SigupComponent } from './auth/sigup/sigup.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';
import { RecipesModule } from './recipes/recipes.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    ShoppingEditTemplateDrivenComponent,
    // ShoppingEditReactiveComponent,
    SiginComponent,
    SigupComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    HttpModule,
    RecipesModule,
    SharedModule,
  ],
  providers: [ShoppingListService, RecipeService, DataStorageService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
