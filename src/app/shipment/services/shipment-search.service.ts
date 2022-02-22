import { Injectable } from '@angular/core';
import { Subject, pipe, BehaviorSubject } from 'rxjs';
import { filter, map } from 'rxjs/operators'
import { Search } from '../model/search';
import { Shipment } from '../model/shipment';
import { HttpRequestDataService } from './http-request-data.service';

@Injectable({
  providedIn: 'root'
})
export class ShipmentSearchService {

  searchCriteria = new Subject<Search>();
  searchResults = new BehaviorSubject<Shipment[]>([]);
  numberOfShipments = new Subject<Shipment[]>();

  constructor(private httpReq: HttpRequestDataService) {
    this.searchCriteria.subscribe((data: Search) => {
      this.searchShipment(data);
    })
  }

  searchShipment(data: Search) {
    this.httpReq.getShipment()
      .pipe(
        map((result: any) => {
          let shipmentData: Shipment[];
          shipmentData = result.Shipments.Shipment
            .filter((res: any) => {
              if ((data.DayPhone === "" && data.EMailID === "" && data.FirstName === ""
                && data.LastName === "" && data.OrderNo === "" && data.ShipmentNo === "") ||
                (!data.DayPhone && !data.EMailID && !data.FirstName
                  && !data.LastName && !data.OrderNo && !data.ShipmentNo)) {
                return true;
              } else if (data.DayPhone === res.BillToAddress.DayPhone
                || data.EMailID === res.BillToAddress.EMailID
                || data.FirstName === res.BillToAddress.FirstName
                || data.LastName === res.BillToAddress.LastName
                || data.OrderNo === res.OrderNo
                || data.ShipmentNo === res.ShipmentNo) {
                return true;
              } else {
                return false;
              }
            })
            .map((respData: any): Shipment => {
              return {
                OrderNo: respData.OrderNo,
                TotalNumberOfRecords: respData.ShipmentLines.TotalNumberOfRecords,
                ScacAndService: respData.ScacAndService,
                ShipmentNo: respData.ShipmentNo,
                AssignedToUserId: respData.AssignedToUserId,
                ExpectedShipmentDate: respData.ExpectedShipmentDate,
                FirstName: respData.BillToAddress.FirstName,
                LastName: respData.BillToAddress.LastName,
                DayPhone: respData.BillToAddress.DayPhone,
                EMailID: respData.BillToAddress.EMailID,
                Status: respData.Status,
                DeliveryMethod: respData.DeliveryMethod
              }
            });
          return shipmentData;
        })
      )
      .subscribe((result: Shipment[]) => {
        console.log(result);
        this.searchResults.next(result);
        this.numberOfShipments.next(result)
      }

      );

  }
}
