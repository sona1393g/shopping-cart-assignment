import { Component, OnInit, Renderer2 } from '@angular/core';
import { HOME, LOGIN, PRODUCTS, REGISTER } from '../../../constants/routes.constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  login = LOGIN.url;
  signUp = REGISTER.url;
  home = HOME.url;
  products = PRODUCTS.url;
  isCartVisible = false;
  constructor(private readonly renderer: Renderer2) { }

  ngOnInit(): void {
  }
  toggleCartOpen() {
    this.isCartVisible = !this.isCartVisible;
    this.isCartVisible 
    ? this.renderer.addClass(document.body, 'modal-open')
    : this.renderer.removeClass(document.body, 'modal-open') ;
  }
}
