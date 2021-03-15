import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { Banner, Category } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  banners: Banner[] = [];
  categories: Category[] = [];
  constructor(private readonly homeService: HomeService) {}

  ngOnInit(): void {
    this.getBanners();
    this.getCategories();
  }
  /**
   * @description get banners
   */
  getBanners(): void {
    this.homeService.getBanners().subscribe((res: Banner[]) => {
      this.banners = res;
    });
  }
  /**
   * @description get categories for home page
   */
  getCategories(): void {
    this.homeService.getCategories().subscribe((res: Category[]) => {
      this.categories = res;
    });
  }
}
