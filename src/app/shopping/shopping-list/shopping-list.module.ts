import { NgModule } from "@angular/core";
import { ShoppingListComponent } from "./shopping-list.component";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { ShoppingEditTemplateDrivenComponent } from "./shopping-edit-td/shopping-edit-td.component";
import { CommonModule } from "@angular/common";
import { ShoppingListRoutingModule } from "./shopping-list.routing.module";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  declarations:[
    ShoppingListComponent,
    ShoppingEditComponent,
    ShoppingEditTemplateDrivenComponent,
  ],
  imports:[
    CommonModule,
    ShoppingListRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class ShoppingListModule {
}
