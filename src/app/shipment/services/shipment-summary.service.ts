import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Product } from '../model/product';
import { Summary } from '../model/summary';
import { HttpRequestDataService } from './http-request-data.service';

@Injectable({
  providedIn: 'root'
})
export class ShipmentSummaryService {

  constructor(private httpReq: HttpRequestDataService) { }

  getSummary(shipmentId: string) {
    return this.httpReq.getSummary().pipe(
      map((respData: any) => {
            return {
              OrderNo: respData.Shipment.OrderNo,
              TotalNumberOfRecords: respData.Shipment.ShipmentLines.TotalNumberOfRecords,
              ScacAndService: respData.Shipment.ScacAndService,
              ShipmentNo: respData.Shipment.ShipmentNo,
              AssignedToUserId: respData.Shipment.AssignedToUserId,
              ExpectedShipmentDate: respData.Shipment.ExpectedShipmentDate,
              FirstName: respData.Shipment.BillToAddress.FirstName,
              LastName: respData.Shipment.BillToAddress.LastName,
              DayPhone: respData.Shipment.BillToAddress.Phonenumber,
              EMailID: respData.Shipment.BillToAddress.EmailID,
              Status: respData.Shipment.Status,
              DeliveryMethod: respData.Shipment.DeliveryMethod,
              BillToAddressLine1: respData.Shipment.BillToAddress.AddressLine1,
              BillToAddressLine2: respData.Shipment.BillToAddress.AddressLine2,
              BillToAddressLine3: respData.Shipment.BillToAddress.City + respData.Shipment.BillToAddress.State + respData.Shipment.BillToAddress.ZipCode,
              BillToCountry: respData.Shipment.BillToAddress.Country,
              BillToName: respData.Shipment.BillToAddress.FirstName + respData.Shipment.BillToAddress.LastName,
              ShipToAddressLine1: respData.Shipment.ToAddress.AddressLine1,
              ShipToAddressLine2: respData.Shipment.ToAddress.AddressLine2,
              ShipToAddressLine3: respData.Shipment.ToAddress.City + respData.Shipment.ToAddress.State + respData.Shipment.ToAddress.ZipCode,
              ShipToCountry: respData.Shipment.ToAddress.Country,
              ShipToName: respData.Shipment.ToAddress.FirstName + respData.Shipment.ToAddress.LastName,
              Products: respData.Shipment.ShipmentLines.ShipmentLine.map((product: any): Product => {
                return {
                  Description: product.OrderLine.ItemDetails.Description,
                  ProductId: product.OrderLine.ItemDetails.ItemID,
                  ProductImgUrl: product.OrderLine.ItemDetails.ImageUrl,
                  Quantity: product.Quantity,
                  UnitOfMeasure: product.OrderLine.ItemDetails.DisplayUnitOfMeasure
                }
              })
            }
      })
    )
  }
}
