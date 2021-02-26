import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: IProduct = {};
  constructor() { }

  ngOnInit(): void {
  }
  buyNow(item: IProduct) {

  }
}
