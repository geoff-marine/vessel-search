import { Component, OnInit } from '@angular/core';
import { VesselSource } from '../vessel.interface';
import { ElasticsearchService } from '../../elasticsearch.service';

@Component({
  selector: 'app-search-vessels',
  templateUrl: './search-vessels.component.html',
  styleUrls: ['./search-vessels.component.css']
})
export class SearchVesselsComponent implements OnInit {

  private static readonly INDEX = 'vessel';
  private static readonly TYPE = 'mostrecentcfr';

  vesselSources: VesselSource[];
  private queryText = '';
  private lastKeyPress = 0;

  constructor(private es: ElasticsearchService) {
    this.queryText = '';
   }

  ngOnInit() {
  }

}
search($event) {
  if ($event.timeStamp - this.lastKeypress > 100) {
    this.queryText = $event.target.value;

    this.es.fullTextSearch(
      SearchVesselsComponent.INDEX,
      SearchVesselsComponent.TYPE,
      'vesselname', this.queryText).then(
        response => {
          this.vesselSources = response.hits.hits;
          console.log(response);
        }, error => {
          console.error(error);
        }).then(() => {
          console.log('Search Completed!');
        });
  }

  this.lastKeypress = $event.timeStamp;
  }
}
