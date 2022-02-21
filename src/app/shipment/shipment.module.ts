import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShipmentRoutingModule } from './shipment-routing.module';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';
import { SummaryComponent } from './summary/summary.component';
import { FormsModule } from '@angular/forms';
import { ResultComponent } from './results/result/result.component';
import { ProductsComponent } from './summary/products/products.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [
    SearchComponent,
    ResultsComponent,
    SummaryComponent,
    ResultComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ShipmentRoutingModule,
    NgbModule,
    InfiniteScrollModule
  ], 
  providers: [
  ]
})
export class ShipmentModule { }
