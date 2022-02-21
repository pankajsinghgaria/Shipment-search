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

  searchResults: Shipment[] = [];
  searchResults$ = new BehaviorSubject<Shipment[]>([]);
  subscription: Subscription

  @ViewChild('popContent')
  popup: NgbPopover;
  isOpen: boolean = false;
  filterData = [
    { id: 0, name: 'Ready For Backroom Pick' },
    { id: 1, name: 'Backroom Pick in Progress' },
    { id: 2, name: 'Ready For Customer Pickup' },
    { id: 3, name: 'Ready For Packing' },
    { id: 4, name: 'Packing in Progress' },
    { id: 5, name: 'Packed' },
    { id: 6, name: 'Shipped/Picked' },
    { id: 7, name: 'Cancelled' }
  ];

  constructor(private shipmentSearchService: ShipmentSearchService, private router: Router, private previousRouteService: PreviousRouteService) { }

  ngOnInit(): void {
    this.onScroll()
  }

  onSubmit(filterForm: NgForm) {
    console.log(filterForm.value)
  }

  filterclicked() {
    // !this.isOpen;
    // if (!this.isOpen) {
    //   this.popup.open()
    //   !this.isOpen
    // }
    // else {
    //   this.popup.close();
    //   !this.isOpen
    // }
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
