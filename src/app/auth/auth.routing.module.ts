import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SigupComponent } from "./sigup/sigup.component";
import { SiginComponent } from "./sigin/sigin.component";

const authRoutes: Routes = [
  { path: 'signup', component: SigupComponent },
  { path: 'signin', component: SiginComponent }
]

@NgModule({
  imports:[
    RouterModule.forChild(authRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class AuthRoutingModule {

}
