import { Component, OnInit, Input } from '@angular/core';
import { Events} from '../events-search/events.interface';

@Component({
  selector: 'app-events-details',
  templateUrl: './events-details.component.html',
  styleUrls: ['./events-details.component.css']
})
export class EventsDetailsComponent implements OnInit {

  @Input() events: Events;
  dataSource = [this.events];
  public displayedColumns = ['Vessel Name', 'Country Code', 'CFR', 'Loa',
    'Lbp', 'Event Code', 'Event Start Date', 'Event End Date'];

  constructor() { }

  ngOnInit() {

  }

}


