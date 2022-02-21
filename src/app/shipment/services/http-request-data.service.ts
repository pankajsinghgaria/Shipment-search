import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestDataService {

  constructor(private http: HttpClient) { }

  getShipment(){
    return this.http.get('./assets/shipment.json')
  }

  getSummary(){
    return this.http.get('./assets/shipmentDetail.json')
  }
}
