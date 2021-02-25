import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { IBanner, ICategory } from 'src/app/interfaces/interfaces';
import { ApiEndPoints } from 'src/app/constants/apiEndPoints';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private readonly http: HttpClient) { }
  /**
   * @description Api call to get home page Banner offers
  */
  getBanners(): Observable<IBanner[]> {
    return this.http.get<IBanner[]>(ApiEndPoints.GET_HOME_BANNERS);
  }
  /**
   * @description Api call to get home page categories
  */
  getCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(ApiEndPoints.GET_CATEGORIES);
  }
}
