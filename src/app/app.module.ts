import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { RecipesModule } from './recipes/recipes.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping/shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { AuthGuard } from './auth/auth-guard.service';
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from '@ngrx/store';
import { shopppingListReducer } from './shopping/shopping-list/store/shopping-list.reducers'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SharedModule,
    AuthModule,
    ShoppingListModule,
    CoreModule,
    HttpClientModule,
    StoreModule.forRoot({ shoppingList: shopppingListReducer })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
