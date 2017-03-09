import { Routes, RouterModule } from "@angular/router"
import { ModuleWithProviders } from "@angular/core"

import { HomeComponent } from "./home/home.component"
import { DetailsComponent } from "./details/details.component"

const APP_ROUTES: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "details",
    component: DetailsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);