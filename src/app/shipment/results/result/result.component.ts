import { Component, Input, OnInit } from '@angular/core';
import { Shipment } from '../../model/shipment';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  @Input()
  shipment : Shipment;

  constructor() { }

  ngOnInit(): void {
  }
onScroll(){
  console.log('scrolled')
}
}
