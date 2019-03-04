import { Component, OnInit, Input } from '@angular/core';
import { Vessel } from '../vessel.interface';

@Component({
  selector: 'app-vessel-details',
  templateUrl: './vessel-details.component.html',
  styleUrls: ['./vessel-details.component.css']
})
export class VesselDetailsComponent implements OnInit {

  @Input() vessel: Vessel;

  constructor() { }

  ngOnInit() {
  }

}
