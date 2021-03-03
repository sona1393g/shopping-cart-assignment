import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MESSAGES } from 'src/app/constants/constants';
import { ICART, IProduct } from 'src/app/interfaces/interfaces';
import { ToasterService } from './toaster.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private itemsInCart = new BehaviorSubject<ICART>({
    totalItems: 0,
    products: [],
  });
  constructor(
    private readonly http: HttpClient,
    private readonly toasterService: ToasterService
  ) {}
  private calculateTotalItems(products: IProduct[]): number {
    let totalItemInCart = 0;
    products.forEach((item) => {
      totalItemInCart = item.count + totalItemInCart;
    });
    return totalItemInCart;
  }
  addItemToCart(newItem: IProduct): void {
    const currentItems = this.itemsInCart.value.products;
    newItem.count = newItem.count ? newItem.count + 1 : 1;
    newItem.total = newItem.count * newItem.price;
    const index = currentItems.findIndex((i) => i.id === newItem.id);
    index === -1 ? currentItems.push(newItem) : (currentItems[index] = newItem);
    this.toasterService.show(MESSAGES.PRODUCT_ADDED);

    this.itemsInCart.next({
      products: currentItems,
      totalItems: this.calculateTotalItems(currentItems),
    });
  }

  getItemOfCart(): Observable<ICART> {
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
      this.itemsInCart.next({
        products: currentItems,
        totalItems: this.calculateTotalItems(currentItems),
      });
    } else {
      currentItems.splice(indexToDelete, 1);
      this.itemsInCart.next({
        products: currentItems,
        totalItems: this.calculateTotalItems(currentItems),
      });
    }
  }
}
