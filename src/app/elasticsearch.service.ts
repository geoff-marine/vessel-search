import { Injectable } from '@angular/core';
import { Client } from 'elasticsearch-browser';
import * as elasticsearch from 'elasticsearch-browser';

@Injectable({
  providedIn: 'root'
})
export class ElasticsearchService {

  private client: Client;

  private queryalldocs = {
    size: 50,
    query: {
      match_all: {}
    }
  };

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
  getAllDocuments(_index, _type): any {
    return this.client.search({
      index: _index,
      type: _type,
      body: this.queryalldocs,
      filterPath: ['hits.hits._source']
    });
  }

  fullTextSearch(_index, _type, _queryText): any {
    return this.client.search(      {
      index:_index,
      type:_type,
      body:{
      size: 50,
       query: {
        bool: {
          must: {
        multi_match : {
          query:  _queryText,
          fields: [ 'VesselName.trigram', 'ExactName^10' ],
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

