import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { asyncData } from './async-observable-helpers';

// re-export for tester convenience
export { Category, Banner } from '../interfaces/interfaces';
export { HomeService } from '../home/services/home.service';
export { getTestBanners, getTestCategories } from './mockData';

import { Banner, Category, Product } from '../interfaces/interfaces';
import { getTestBanners, getTestCategories, getTestProducts } from './mockData';
import { HomeService } from '../home/services/home.service';
import { HttpClient } from '@angular/common/http';
import { ProductsService } from '../products/services/products.service';

@Injectable()
/**
 * FakeProductService pretends to make real http requests.
 * implements only as much of ProductService as is actually consumed by the app
 */
export class TestProductService extends ProductsService {
  constructor(private readonly httpClient: HttpClient) {
    super(httpClient);
  }

  products = getTestProducts();
  categories = getTestCategories();

  getProducts(): Observable<Product[]> {
    return asyncData(this.products);
  }

  getCategories(): Observable<Category[]> {
    return asyncData(this.categories);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
