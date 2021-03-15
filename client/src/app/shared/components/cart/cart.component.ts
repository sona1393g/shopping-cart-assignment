import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PRODUCTS } from 'src/app/constants/routes.constants';
import { Product } from 'src/app/interfaces/interfaces';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  @Input() isCartVisible = false;
  @Output() closeCart = new EventEmitter();
  products: Product[] = [];
  totalItems = 0;
  totalPrice = 0;
  productUrl = PRODUCTS.url;
  constructor(private readonly cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getItemOfCart().subscribe((res) => {
      this.products = res.products;
      this.totalItems = res.totalItems;
      this.totalPrice = 0;
      this.products.forEach((item) => {

        const total = item.total || 0;
        console.log(total)
        this.totalPrice = this.totalPrice + total;
      });
    });
  }

  deleteProduct(item: Product): void {
    this.cartService.removeItemOfcart(item.id);
  }
  addProduct(item: Product): void {
    this.cartService.addItemToCart(item);
  }
}
