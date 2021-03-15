import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MESSAGES } from 'src/app/constants/constants';
import { Cart, Product } from 'src/app/interfaces/interfaces';
import { ToasterService } from './toaster.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private itemsInCart = new BehaviorSubject<Cart>({
    totalItems: 0,
    products: [],
  });
  private cartValue: { [key: string]: any } = {};
  constructor(private readonly toasterService: ToasterService) {}
  private calculateTotalItems(products: Product[]): number {
    let totalItemInCart = 0;
    products.forEach((item) => {
      totalItemInCart = item.count + totalItemInCart;
    });
    return totalItemInCart;
  }
  addItemToCart(newItem: Product): void {
    const currentItems = this.itemsInCart.value.products;
    newItem.count = newItem.count ? newItem.count + 1 : 1;
    newItem.total = newItem.count * newItem.price;
    const index = currentItems.findIndex((i) => i.id === newItem.id);
    index === -1 ? currentItems.push(newItem) : (currentItems[index] = newItem);
    this.toasterService.show(MESSAGES.PRODUCT_ADDED);

    this.broadcastCart(currentItems);
    this.cartValue[newItem.id] = { count: newItem.count, total: newItem.total };
    this.saveCartValue();
  }

  getItemOfCart(): Observable<Cart> {
    return this.itemsInCart.asObservable();
  }

  removeItemOfcart(id?: string): void {
    const currentItems = this.itemsInCart.value.products;
    const indexToDelete = currentItems.findIndex((item) => item.id === id);
    const itemToDelete = currentItems[indexToDelete];

    if (itemToDelete.count > 1) {
      currentItems[indexToDelete].count = currentItems[indexToDelete].count - 1;
      currentItems[indexToDelete].total =
        currentItems[indexToDelete].count * currentItems[indexToDelete].price;
      this.broadcastCart(currentItems);
      this.cartValue[itemToDelete.id] = {
        count: currentItems[indexToDelete].count,
        total: currentItems[indexToDelete].total,
      };
    } else {
      currentItems.splice(indexToDelete, 1);
      delete this.cartValue[itemToDelete.id];
      this.broadcastCart(currentItems);
    }

    this.saveCartValue();
  }
  private saveCartValue() {
    localStorage.setItem(
      'cart',
      JSON.stringify({
        products: this.cartValue,
        totalItems: this.itemsInCart.value.totalItems,
      })
    );
  }
  broadcastCart(currentItems: Product[], updatecart = false) {
    this.itemsInCart.next({
      products: currentItems,
      totalItems: this.calculateTotalItems(currentItems),
    });
    if (updatecart) {
      this.cartValue =
        JSON.parse(localStorage.getItem('cart') || '{}').products || {};
    }
  }
}
