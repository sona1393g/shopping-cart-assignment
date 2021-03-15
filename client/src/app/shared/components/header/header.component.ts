import { Component, OnInit, Renderer2 } from '@angular/core';
import {
  HOME,
  LOGIN,
  PRODUCTS,
  REGISTER,
} from 'src/app/constants/routes.constants';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  login = LOGIN.url;
  signUp = REGISTER.url;
  home = HOME.url;
  products = PRODUCTS.url;
  isCartVisible = false;
  totalItemInCart = 0;
  user: any;
  constructor(
    private readonly renderer: Renderer2,
    private readonly cartService: CartService
  ) {}

  ngOnInit(): void {
    this.user = localStorage.getItem('user');
    this.cartService.getItemOfCart().subscribe((res) => {
      this.totalItemInCart = res.totalItems;
    });
  }
  toggleCartOpen(): void {
    this.isCartVisible = !this.isCartVisible;
    this.isCartVisible
      ? this.renderer.addClass(document.body, 'modal-open')
      : this.renderer.removeClass(document.body, 'modal-open');
  }
}
