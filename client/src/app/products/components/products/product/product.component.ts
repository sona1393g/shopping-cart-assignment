import { Component, Input } from '@angular/core';
import { Product } from 'src/app/interfaces/interfaces';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() product: Product = { price: 0, count: 0, id: '' };
  constructor(private readonly cartService: CartService) {}

  buyNow(): void {
    this.cartService.addItemToCart(this.product);
  }
}
