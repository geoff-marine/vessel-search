import {ShowVesselComponent} from './vessel/show-vessel/show-vessel.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'vessel', pathMatch: 'full'},
  {path: 'vessel', component: ShowVesselComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
