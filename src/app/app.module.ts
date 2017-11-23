import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListService } from './shopping/shopping-list/shopping-list.service';
import { RecipeService } from './recipes/recipe-list/recipe.service';
import { RoutingModule } from './routing.module';
import { HttpModule } from '@angular/http';
import { DataStorageService } from './shared/data.storage.service';
import { AuthService } from './auth/auth.service';
import { RecipesModule } from './recipes/recipes.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping/shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpModule,
    SharedModule,
    AuthModule,
    ShoppingListModule,
  ],
  providers: [ShoppingListService, RecipeService, DataStorageService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
