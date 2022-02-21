import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultsComponent } from './results/results.component';
import { SearchComponent } from './search/search.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'search'
  },
  {
    path: 'search', component: SearchComponent
  },
  {
    path: 'results', component: ResultsComponent
  },
  {
    path: 'summary/:shipmentNumber', component: SummaryComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ShipmentRoutingModule { }
