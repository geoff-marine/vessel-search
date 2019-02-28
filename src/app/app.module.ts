import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestEsComponent } from './test-es/test-es.component';
import { VesselDetailsComponent } from './vessel/vessel-details/vessel-details.component';
import { ShowVesselComponent } from './vessel/show-vessel/show-vessel.component';
import { SearchVesselsComponent } from './vessel/search-vessels/search-vessels.component';

@NgModule({
  declarations: [
    AppComponent,
    TestEsComponent,
    VesselDetailsComponent,
    ShowVesselComponent,
    SearchVesselsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
