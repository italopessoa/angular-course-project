import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping/shopping-list/shopping-list.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeResolver } from "./recipes/recipe-list/recipe-resolver.service";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { SigupComponent } from "./auth/sigup/sigup.component";
import { SiginComponent } from "./auth/sigin/sigin.component";
import { AuthGuard } from "./auth/auth-guard.service";

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {

}
