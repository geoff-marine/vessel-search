import {ShowVesselComponent} from './vessel/show-vessel/show-vessel.component';
import { SearchVesselsComponent} from './vessel/search-vessels/search-vessels.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'search', pathMatch: 'full'},
  {path: 'vessel', component: ShowVesselComponent},
  {path: 'search', component: SearchVesselsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
