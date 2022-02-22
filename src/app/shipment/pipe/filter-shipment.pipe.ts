import { Pipe, PipeTransform } from '@angular/core';
import { Shipment } from '../model/shipment';

@Pipe({
  name: 'filterShipment'
})
export class FilterShipmentPipe implements PipeTransform {

  transform(value: Shipment[] | null, type: string): Shipment[] | null {
    // debugger;
    if (value)
      return value.filter(data => {
        if (type === '')
          return true;
        else
          return data.DeliveryMethod === type
      });
    else
      return null
  }

}
