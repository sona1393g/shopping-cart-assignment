import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ApiEndPoints } from 'src/app/constants/apiEndPoints';
import { ICategory, IProduct } from 'src/app/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private readonly http: HttpClient) { }

  /**
  * @description Api call to get home page Banner offers
  */
  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(ApiEndPoints.GET_PRODUCTS);
  }
  /**
   * @description Api call to get home page categories
  */
  getCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(ApiEndPoints.GET_CATEGORIES);
  }
}
