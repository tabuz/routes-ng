import { Routes, RouterModule } from "@angular/router";

import { UserComponent } from "./user/user.component";
import { HomeComponent } from "./home-component.component";
import { USER_ROUTES } from "./user/user.routes";


const APP_ROUTES: Routes = [
  { path: 'user/:id', component: UserComponent },
  { path: 'user/:id', component: UserComponent, children: USER_ROUTES },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '/user/1', pathMatch: 'full' },
];
export const APP_ROUTES_PROVIDER = RouterModule.forRoot(APP_ROUTES);
