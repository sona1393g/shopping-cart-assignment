import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ApiEndPoints } from 'src/app/constants/apiEndPoints';
import { Category, Product } from 'src/app/interfaces/interfaces';
import { map } from 'rxjs/operators';

@Injectable()
export class ProductsService {
  constructor(private readonly http: HttpClient) {}
  /**
   * @description Api call to get products
   */
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(ApiEndPoints.GET_PRODUCTS).pipe(
      map((item) => {
        const cart = JSON.parse(localStorage.getItem('cart') || '{}');
        if (cart.products) {
          item.forEach((i) => {
            const product = cart.products[i.id];
            if (product) {
              (i.count = product.count), (i.total = product.total);
            }
          });
        }
        return item;
      })
    );
  }
  /**
   * @description Api call to get home page categories
   */
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(ApiEndPoints.GET_CATEGORIES);
  }
}
