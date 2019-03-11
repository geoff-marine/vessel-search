import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ElasticsearchService } from '../elasticsearch.service';
import { Events, EventsSource} from '../events-search/events.interface';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-events-search',
  templateUrl: './events-search.component.html',
  styleUrls: ['./events-search.component.css']
})
export class EventsSearchComponent implements OnInit {

  private static readonly INDEX = 'allvessels';
  private static readonly TYPE = 'allevents';

  events: EventsSource[];
  eventsSources: EventsSource;

  constructor(
    private route: ActivatedRoute,
    private es: ElasticsearchService
  ) {
  }

  ngOnInit() {
    this.getID();

  }
  getID(): void {
  this.es.getEvents(EventsSearchComponent.INDEX,
    EventsSearchComponent.TYPE, this.route.snapshot.paramMap.get('cfr'))
    .then(
      response => {
        this.eventsSources = response.hits.hits;
        console.log(response);
      });
  }

}

