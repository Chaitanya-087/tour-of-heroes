import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HeroesComponent } from "./heroes/heroes.component";
import { QuoteDetailsComponent } from "./quote-details/quote-details.component";

const routes: Routes = [
  { path: "", redirectTo: "/heroes", pathMatch: "full" },
  { path: "heroes", component: HeroesComponent },
  {path:"quotes",component:QuoteDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
