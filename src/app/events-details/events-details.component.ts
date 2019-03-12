import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { EventsSource} from '../events-search/events.interface';
import {MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-events-details',
  templateUrl: './events-details.component.html',
  styleUrls: ['./events-details.component.css']
})


export class EventsDetailsComponent implements OnInit {

  @Input() events: EventsSource[];
  public displayedColumns = ['Vessel Name', 'Country Code', 'CFR', 'Loa', 'Lbp', 'Event Code', 'Event Start Date', 'Event End Date'];

  constructor() {
   }

  ngOnInit() {

  }
  }
