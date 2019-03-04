import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestEsComponent } from './test-es/test-es.component';
import { VesselDetailsComponent } from './vessel/vessel-details/vessel-details.component';
import { ShowVesselComponent } from './vessel/show-vessel/show-vessel.component';
import { SearchVesselsComponent } from './vessel/search-vessels/search-vessels.component';
import { EventsSearchComponent } from './events-search/events-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule, MatCardModule, MatIconModule } from '@angular/material';
import { MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    TestEsComponent,
    VesselDetailsComponent,
    ShowVesselComponent,
    SearchVesselsComponent,
    EventsSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
