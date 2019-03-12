import { Component, OnInit } from '@angular/core';
import { VesselSource, Vessel } from '../vessel.interface';
import { ElasticsearchService } from '../../elasticsearch.service';

@Component({
  selector: 'app-search-vessels',
  templateUrl: './search-vessels.component.html',
  styleUrls: ['./search-vessels.component.css']
})
export class SearchVesselsComponent implements OnInit {

  private static readonly INDEX = 'vesselname';
  private static readonly TYPE = 'allnames';

  private queryText = '';
  private lastKeyPress = 0;
  vesselSources: any;
  vessel: Vessel;



  constructor(private es: ElasticsearchService) {
    this.queryText = '';
   }

  ngOnInit() {
  }


search($event) {
  if ($event.timeStamp - this.lastKeyPress > 100) {
    this.queryText = $event.target.value;
    this.es.fullTextSearch(
      SearchVesselsComponent.INDEX,
      SearchVesselsComponent.TYPE,
      this.queryText).then(
        response => {
          this.vesselSources = response.hits.hits;
          console.log(response);
        }, error => {
          console.error(error);
        }).then(() => {
          console.log('Search Completed!');
        });
  }

  this.lastKeyPress = $event.timeStamp;
  }
}
