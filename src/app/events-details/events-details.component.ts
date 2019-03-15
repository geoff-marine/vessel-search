import { Component, OnInit, Input } from '@angular/core';
import { EventsSource} from '../events-search/events.interface';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-events-details',
  templateUrl: './events-details.component.html',
  styleUrls: ['./events-details.component.css']
})


export class EventsDetailsComponent implements OnInit {

  @Input() events: EventsSource[];
  public displayedColumns = ['Vessel Name', 'Country Code', 'CFR', 'Loa', 'PowerMain', 'TonRef',
   'Event Code', 'Event Start Date', 'Event End Date'];


   getToolTipData(eventCode: string): string {
    switch (eventCode) {
      case'CST': {eventCode = 'New Construction'; }
                 break;
    }
    switch (eventCode) {
      case'MOD': {eventCode = 'Modification'; }
                 break;
    }
    switch (eventCode) {
      case'CEN': {eventCode = 'Entry to fleet Census'; }
                 break;
    }
    switch (eventCode) {
      case'CHA': {eventCode = 'Change of activity'; }
                 break;
    }
    switch (eventCode) {
      case'IMP': {eventCode = 'Intra-Community import'; }
                 break;
    }
    switch (eventCode) {
      case'DES': {eventCode = 'Break-up, shipwreck'; }
                 break;
    }
    switch (eventCode) {
      case'RET': {eventCode = 'Change of activity'; }
                 break;
    }
    switch (eventCode) {
      case'EXP': {eventCode = 'Intra-Community export, transfer'; }
                 break;
    }
    return eventCode;
   }

  constructor() {
   }

  ngOnInit() {

  }
  }
