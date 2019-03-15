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
import { MatGridListModule, MatCardModule, MatIconModule, MatSidenavModule, MatTableModule  } from '@angular/material';
import { MatToolbarModule, MatButtonModule, MatFormFieldModule, MatListModule } from '@angular/material';
import {MatTooltipModule} from '@angular/material/tooltip';
import { EventsDetailsComponent } from './events-details/events-details.component';
import { OrderModule } from 'ngx-order-pipe';
import { EsLastUpdateComponent } from './es-last-update/es-last-update.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MomentModule } from 'ngx-moment';



@NgModule({
  declarations: [
    AppComponent,
    TestEsComponent,
    VesselDetailsComponent,
    ShowVesselComponent,
    SearchVesselsComponent,
    EventsSearchComponent,
    EventsDetailsComponent,
    EsLastUpdateComponent
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
    MatListModule,
    MatGridListModule,
    OrderModule,
    MatSidenavModule,
    MatTableModule,
    FlexLayoutModule,
    MomentModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
