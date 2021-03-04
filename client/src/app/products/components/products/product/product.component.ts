import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/interfaces/interfaces';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() product: IProduct = { price: 0, count: 0 };
  constructor(private readonly cartService: CartService) {}

  buyNow(item: IProduct): void {
    this.cartService.addItemToCart(item);
  }
}
