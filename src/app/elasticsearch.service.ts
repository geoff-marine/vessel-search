import { Injectable } from '@angular/core';
import { Client } from 'elasticsearch-browser';
import * as elasticsearch from 'elasticsearch-browser';
import { Observable } from 'rxjs';
import { Vessel, VesselSource } from './vessel/vessel.interface';
import { Events, EventsSource } from './events-search/events.interface';

@Injectable({
  providedIn: 'root'
})
export class ElasticsearchService {

  private client: Client;

  constructor() {
    if (!this.client) {
      this._connect();
    }
  }

  private _connect() {
    this.client = new elasticsearch.Client({
      host: 'http://10.11.1.70:9200',
      log: 'trace'
    });
  }

  isAvailable(): any {
    return this.client.ping({
      requestTimeout: Infinity,
      body: 'Ping from ES is good'
    });
  }

  lastUpdate(): any {
    return this.client.cat.indices(['h=h,s,i,id,p,r,dc,dd,ss,creation.date.string&format=json&pretty']);
  }

  getEvents(myIndex, myType, myCFR): Observable<EventsSource[]> {
    return this.client.search<EventsSource[]>(
      {
        index: myIndex,
        type: myType,
        body: {
          query: {
            match : {cfr : myCFR}
          },
          sort: [
            {EventEndDate: {order : 'desc'}}
          ]
        }
      }
    );
  }

  fullTextSearch(myIndex, myType, queryText): Observable<VesselSource[]> {
    return this.client.search(      {
      index: myIndex,
      type: myType,
      body: {
      size: 50,
       query: {
        bool: {
          must: {
        multi_match : {
          query:  queryText,
          fields: [ 'VesselName.trigram', 'ExactName^10', 'cfr' ],
          fuzziness: 'AUTO'
        }
        },
        should: [{match: {CountryCode: 'IRL'}}]

      }
     }
    }
  });
  }
}

