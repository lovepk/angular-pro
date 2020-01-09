import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { singlePageRoutes } from './single-page-routes';

const routes: Routes = [
  ...singlePageRoutes,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
