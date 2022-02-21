import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Shipment } from '../model/shipment';
import { PreviousRouteService } from '../services/previous-route.service';
import { ShipmentSearchService } from '../services/shipment-search.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit, OnDestroy {

  pipeInput ='';
  searchResults: Shipment[] = [];
  searchResults$ = new BehaviorSubject<Shipment[]>([]);
  subscription: Subscription;

  isOpen: boolean = false;
  filterData = [
    { selected: false, value:'PICK', name: 'Ready For Backroom Pick' },
    { selected: false, value:'PICK', name: 'Backroom Pick in Progress' },
    { selected: false, value:'PICK', name: 'Ready For Customer Pickup' },
    { selected: false, value:'SHP', name: 'Ready For Packing' },
    { selected: false, value:'SHP', name: 'Packing in Progress' },
    { selected: false, value:'SHP', name: 'Packed' },
    { selected: false, value:'PICK',name: 'Shipped/Picked' },
    { selected: false, value:'PICK', name: 'Cancelled' }
  ];

  constructor(private shipmentSearchService: ShipmentSearchService, private router: Router, private previousRouteService: PreviousRouteService) { }

  ngOnInit(): void {
    this.onScroll()
  }

  onSubmit(filterForm: NgForm) {
    console.log(filterForm.value);
    if(filterForm.value.PICK && !filterForm.value.SHP){
      this.pipeInput = 'PICK';
    } else if(!filterForm.value.PICK && filterForm.value.SHP){
      this.pipeInput = 'SHP';
    } else {
      this.pipeInput = '';
    }
  }

  onScroll() {
    console.log('onscroll');
    this.subscription = this.shipmentSearchService.searchResults.subscribe((data) => {
      if (this.searchResults.length == 0) {
        this.searchResults = [...data];
      } else {
        this.searchResults = [...this.searchResults, ...data];
      }
      this.searchResults$.next(this.searchResults)

    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  close() {
    this.router.navigate(['search'])
  }

  goBack() {
    this.router.navigateByUrl(this.previousRouteService.getPreviousUrl());
    console.log(this.previousRouteService.getPreviousUrl());
  }
}
