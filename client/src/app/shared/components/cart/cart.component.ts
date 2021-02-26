import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PRODUCTS } from 'src/app/constants/routes.constants';
import { IProduct } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input() isCartVisible = false;
  @Output() closeCart = new EventEmitter();
  products: IProduct[] =[
  ];
  totalItems = 0;
  totalPrice = 0;
  productUrl = PRODUCTS.url;
  constructor() { }

  ngOnInit(): void {
  }

  deleteProduct(item: IProduct) {

  }
  addProduct(item: IProduct) {

  }

}
