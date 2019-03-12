import { Component, OnInit } from '@angular/core';
import { VesselSource } from '../vessel.interface';
import { ElasticsearchService } from 'src/app/elasticsearch.service';

@Component({
  selector: 'app-show-vessel',
  templateUrl: './show-vessel.component.html',
  styleUrls: ['./show-vessel.component.css']
})
export class ShowVesselComponent implements OnInit {

  private static readonly INDEX = 'vessel';
  private static readonly TYPE = 'mostrecentcfr';

  vesselSources: VesselSource[];

  constructor(private es: ElasticsearchService ) {}

  ngOnInit() {

  }

}

