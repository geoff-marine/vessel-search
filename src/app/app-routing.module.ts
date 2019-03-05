import {ShowVesselComponent} from './vessel/show-vessel/show-vessel.component';
import { SearchVesselsComponent} from './vessel/search-vessels/search-vessels.component';
import { EventsSearchComponent } from './events-search/events-search.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'search', pathMatch: 'full'},
  {path: 'vessel', component: ShowVesselComponent},
  {path: 'search', component: SearchVesselsComponent},
  {path: 'search/events/:cfr', component: EventsSearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
