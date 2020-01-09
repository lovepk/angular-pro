import { Routes } from '@angular/router';

import { LoginComponent } from './authority/login/login.component';
import { ThemeComponent } from './test/theme/theme.component';

export const singlePageRoutes: Routes = [
  { path: 'authority', component: LoginComponent },
  { path: 'theme', component: ThemeComponent }
];