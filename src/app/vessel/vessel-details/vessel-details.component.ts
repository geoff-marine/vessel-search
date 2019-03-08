import { Component, OnInit, Input } from '@angular/core';
import { Vessel } from '../vessel.interface';
import { MatTableDataSource, MatTable } from '@angular/material';
import {DataSource} from '@angular/cdk/collections';


@Component({
  selector: 'app-vessel-details',
  templateUrl: './vessel-details.component.html',
  styleUrls: ['./vessel-details.component.css']
})
export class VesselDetailsComponent implements OnInit {

  @Input() vessel: Vessel;
  dataSource = new MatTableDataSource<Vessel>([this.vessel]);
  displayedColumns = ['VesselName', 'CountryCode', 'CFR', 'Loa'];
  constructor() {}

  ngOnInit() {
  }

}

