import { Component, OnInit, Input } from '@angular/core';
import { Vessel } from '../vessel/vessel.interface';

@Component({
  selector: 'app-events-search',
  templateUrl: './events-search.component.html',
  styleUrls: ['./events-search.component.css']
})
export class EventsSearchComponent implements OnInit {
  @Input() vessel: Vessel;

  constructor() { }

  ngOnInit() {
  }

}
