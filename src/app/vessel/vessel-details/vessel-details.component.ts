import { Component, OnInit, Input } from '@angular/core';
import { Vessel, VesselSource } from '../vessel.interface';
import { MatTableDataSource, MatTable } from '@angular/material';


@Component({
  selector: 'app-vessel-details',
  templateUrl: './vessel-details.component.html',
  styleUrls: ['./vessel-details.component.css']
})
export class VesselDetailsComponent implements OnInit {

  @Input() vessel: VesselSource[];
  displayedColumns = ['VesselName', 'CountryCode', 'CFR', 'Loa', 'TonRef', 'PowerMain'];
  constructor() {}

  ngOnInit() {
    this.vessel = [] = [];
  }
}

