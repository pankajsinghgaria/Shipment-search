import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ShipmentSummaryService } from '../services/shipment-summary.service';
import { Summary } from 'src/app/shipment/model/summary';
import { PreviousRouteService } from '../services/previous-route.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  shipmentNumber: string;
  shipmentDetails$: Observable<Summary>;
  isHidden: boolean;

  constructor(
    private activatedRouter: ActivatedRoute,
    private shipmentSummaryService: ShipmentSummaryService,
    private router: Router,
    private previousRouteService: PreviousRouteService
  ) { }

  ngOnInit(): void {
    this.shipmentNumber = this.activatedRouter.snapshot.params['shipmentNumber'];
    this.shipmentDetails$ = this.shipmentSummaryService.getSummary(this.shipmentNumber);
  }

  goBack() {
    this.router.navigateByUrl(this.previousRouteService.getPreviousUrl());
    console.log(this.previousRouteService.getPreviousUrl());
  }

  close(){
    this.router.navigate(['search'])
  }
}
