import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { IBanner, ICategory } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  banners:IBanner[] = [];
  categories:ICategory[] = [];
  constructor(private readonly homeService: HomeService) { }

  ngOnInit(): void {
    this.getBanners();
    this.getCategories();
  }

  getBanners(): void {
    this.homeService.getBanners().subscribe((res:IBanner[])  => {
      this.banners = res;
    });
  }
  getCategories(): void {
    this.homeService.getCategories().subscribe((res:ICategory[])  => {
      this.categories = res;
    });
  }

}
