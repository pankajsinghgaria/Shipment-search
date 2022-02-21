import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../model/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  @Input()
  productDetails : Product;

  constructor() { }

  ngOnInit(): void {
    console.log(this.productDetails)
  }

}
