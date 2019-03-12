import { Component, OnInit } from '@angular/core';
import { ElasticsearchService } from '../elasticsearch.service';
import { Eslastupdate } from '../es-last-update/es-last-update.interface';

@Component({
  selector: 'app-es-last-update',
  templateUrl: './es-last-update.component.html',
  styleUrls: ['./es-last-update.component.css']
})
export class EsLastUpdateComponent implements OnInit {
  lastUpdate: Eslastupdate[] = [];

  constructor(private es: ElasticsearchService) {
  }

  ngOnInit() {
    this.es.lastUpdate().then(response => {this.lastUpdate = response; console.log(response); });
  }

}
