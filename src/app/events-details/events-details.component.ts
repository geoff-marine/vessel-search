import { Component, OnInit, Input } from '@angular/core';
import { Events, EventsSource} from '../events-search/events.interface';
import { MatTableDataSource } from '@angular/material';
import { EventsSearchComponent } from '../events-search/events-search.component';


const noddyData: Events[] = [

  // tslint:disable-next-line:max-line-length
  { "cfr": "FRA000330618", "CountryCode": "FRA", "VesselName": "A", "PortCode": "BX", "PortName": "BORDEAUX", "Loa": "9.22", "Lbp": null, "EventCode": "CEN", "EventStartDate": "1989-01-01 00:00:00", "EventEndDate": "1996-12-31 00:00:00" },
  // tslint:disable-next-line:max-line-length
  { "cfr": "FRA000330618", "CountryCode": "FRA", "VesselName": "A", "PortCode": "BX", "PortName": "BORDEAUX", "Loa": "9.22", "Lbp": null, "EventCode": "MOD", "EventStartDate": "1997-01-01 00:00:00", "EventEndDate": "2001-10-21 00:00:00" },
  // tslint:disable-next-line:max-line-length
  { "cfr": "FRA000330618", "CountryCode": "FRA", "VesselName": "A", "PortCode": "BX", "PortName": "BORDEAUX", "Loa": "9.22", "Lbp": null, "EventCode": "DES", "EventStartDate": "2001-10-22 00:00:00", "EventEndDate": "2001-10-22 00:00:00" }

];




@Component({
  selector: 'app-events-details',
  templateUrl: './events-details.component.html',
  styleUrls: ['./events-details.component.css']
})


export class EventsDetailsComponent implements OnInit {

  @Input() events: EventsSource;
  public dataSource = new MatTableDataSource<Events>(this.events);

  public displayedColumns = ['Vessel Name', 'Country Code', 'CFR', 'Loa', 'Lbp', 'Event Code', 'Event Start Date', 'Event End Date'];

  constructor() { }

  ngOnInit() {
  }

}


