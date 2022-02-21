import { Product } from "./product";
import { Shipment } from "./shipment";

export interface Summary extends Shipment{
    ShipToName : string;
    ShipToAddressLine1 : string;
    ShipToAddressLine2 : string;
    ShipToAddressLine3 : string;
    ShipToCountry : string;
    BillToName : string;
    BillToAddressLine1 : string;
    BillToAddressLine2 : string;
    BillToAddressLine3 : string;
    BillToCountry : string;
    Products : Product[]
}