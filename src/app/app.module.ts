import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from "./shopping/shopping-list/shopping-edit/shopping-edit.component";
import { ShoppingEditTemplateDrivenComponent } from "./shopping/shopping-list/shopping-edit-td/shopping-edit-td.component";
import { ShoppingEditReactiveComponent } from "./shopping/shopping-list/shopping-edit-reactive/shopping-edit-reactive.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { DropdownDirective } from "./shared/dropdown.directive";
import { ShoppingListService } from './shopping/shopping-list/shopping-list.service';
import { RecipeService } from './recipes/recipe-list/recipe.service';
import { RoutingModule } from './routing.module';
import { RecipeResolver } from './recipes/recipe-list/recipe-resolver.service';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { HttpModule } from '@angular/http';
import { DataStorageService } from './shared/data.storage.service';
import { SiginComponent } from './auth/sigin/sigin.component';
import { SigupComponent } from './auth/sigup/sigup.component';
import { AuthService } from './auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    ShoppingEditTemplateDrivenComponent,
    ShoppingEditReactiveComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent,
    SiginComponent,
    SigupComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [ShoppingListService, RecipeService, RecipeResolver, DataStorageService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
