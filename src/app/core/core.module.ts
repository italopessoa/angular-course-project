import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { RoutingModule } from "../routing.module";
import { SharedModule } from "../shared/shared.module";
import { AuthService } from "../auth/auth.service";
import { ShoppingListService } from "../shopping/shopping-list/shopping-list.service";
import { RecipeService } from "../recipes/recipe-list/recipe.service";
import { DataStorageService } from "../shared/data.storage.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptor } from "../shared/auth.interceptor";
import { LoggingInterceptor } from "../shared/logging.interceptor";

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    RoutingModule,
    SharedModule
  ],
  exports: [
    RoutingModule,
    HeaderComponent,
  ],
  providers: [
    ShoppingListService,
    RecipeService,
    DataStorageService,
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true }
  ]
})
export class CoreModule {

}
