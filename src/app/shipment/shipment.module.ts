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
import { FilterShipmentPipe } from './filter-shipment.pipe';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    SearchComponent,
    ResultsComponent,
    SummaryComponent,
    ResultComponent,
    ProductsComponent,
    FilterShipmentPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ShipmentRoutingModule,
    NgbModule,
    InfiniteScrollModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ], 
  providers: [
  ]
})
export class ShipmentModule { }
