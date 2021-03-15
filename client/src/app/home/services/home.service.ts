import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Banner, Category } from 'src/app/interfaces/interfaces';
import { ApiEndPoints } from 'src/app/constants/apiEndPoints';

@Injectable()
export class HomeService {
  constructor(private readonly http: HttpClient) {}
  /**
   * @description Api call to get home page Banner offers
   */
  getBanners(): Observable<Banner[]> {
    return this.http.get<Banner[]>(ApiEndPoints.GET_HOME_BANNERS);
  }
  /**
   * @description Api call to get home page categories
   */
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(ApiEndPoints.GET_CATEGORIES);
  }
}
