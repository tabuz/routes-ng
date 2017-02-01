import { Routes, RouterModule } from "@angular/router";

import { UserComponent } from "./user/user.component";
import { HomeComponent } from "./home-component.component";

const APP_ROUTES: Routes = [
  {
    path: 'user',
    component: UserComponent,
  },
  {
    path: '',
    component: HomeComponent,
  }
];
export const APP_ROUTES_PROVIDER = RouterModule.forRoot(APP_ROUTES);
