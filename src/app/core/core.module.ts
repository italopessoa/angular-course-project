import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { RoutingModule } from "../routing.module";
import { SharedModule } from "../shared/shared.module";

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
  ]
})
export class CoreModule {

}
