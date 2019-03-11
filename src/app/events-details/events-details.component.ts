import { Component, OnInit, Input } from '@angular/core';
import { EventsSource} from '../events-search/events.interface';


@Component({
  selector: 'app-events-details',
  templateUrl: './events-details.component.html',
  styleUrls: ['./events-details.component.css']
})


export class EventsDetailsComponent implements OnInit {

  @Input() events: EventsSource[];
  public displayedColumns = ['Vessel Name','Country Code', 'CFR', 'Loa', 'Lbp', 'Event Code', 'Event Start Date', 'Event End Date'];

  constructor() { }

  ngOnInit() {
  }

}


