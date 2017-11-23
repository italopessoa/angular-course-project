import { SigupComponent } from "./sigup/sigup.component";
import { SiginComponent } from "./sigin/sigin.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./auth-guard.service";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AuthRoutingModule } from "./auth.routing.module";

@NgModule({
  declarations: [
    SiginComponent,
    SigupComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule {

}
