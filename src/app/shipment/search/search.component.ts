import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Search } from '../model/search';
import { Shipment } from '../model/shipment';
import { HttpRequestDataService } from '../services/http-request-data.service';
import { ShipmentSearchService } from '../services/shipment-search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  show = true;
  @ViewChild('f')
  form: NgForm;
  subscription: Subscription;
  shipmentSearchData: Search;

  constructor(private router: Router, private searchShipment: ShipmentSearchService) { }

  ngOnInit(): void {
    this.shipmentSearchData = {
      DayPhone: '',
      EMailID: '',
      FirstName: '',
      LastName: '',
      OrderNo: '',
      ShipmentNo: ''
    }
    setTimeout(() => {
      this.form.setValue(this.shipmentSearchData);
    })
  }

  onSubmitFunction() {
    console.log(this.form.value);
    this.searchShipment.searchCriteria.next(this.form.value);
    setTimeout(() => {
      this.subscription = this.searchShipment.numberOfShipments.subscribe((shipments: Shipment[]) => {
        if (shipments.length === 1) {
          this.router.navigate(['/summary', shipments[0].ShipmentNo])
        } else if (shipments.length > 1) {
          this.router.navigate(['/results']);
        } else {

        }
      });
      this.resetForm()
    },0);
  }

  resetForm() {
    this.form.resetForm();
    console.log('after reset value', this.form.value)
  }

  ngOnDestroy(): void {
    if (this.subscription)
      this.subscription.unsubscribe();
  }
}
