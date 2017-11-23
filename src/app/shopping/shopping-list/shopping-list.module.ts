import { NgModule } from "@angular/core";
import { ShoppingListComponent } from "./shopping-list.component";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { ShoppingEditTemplateDrivenComponent } from "./shopping-edit-td/shopping-edit-td.component";
import { ShoppingEditReactiveComponent } from "./shopping-edit-reactive/shopping-edit-reactive.component";
import { CommonModule } from "@angular/common";
import { ShoppingListRoutingModule } from "./shopping-list.routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  declarations:[
    ShoppingListComponent,
    ShoppingEditComponent,
    ShoppingEditTemplateDrivenComponent,
    ShoppingEditReactiveComponent
  ],
  imports:[
    CommonModule,
    ShoppingListRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ShoppingListModule {
}
