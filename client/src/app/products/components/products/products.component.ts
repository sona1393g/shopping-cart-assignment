import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICategory, IProduct } from 'src/app/interfaces/interfaces';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: IProduct[] = [];
  categories: ICategory[] = [];
  selectedCategory = '';
  constructor(
    private readonly productsService: ProductsService,
    private readonly route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe((res) => {
      this.selectedCategory = res.category;
      this.getProducts();
    });
  }

  ngOnInit(): void {
    this.getCategories();
  }
  /**
   * @description get products
   */
  getProducts(): void {
    this.productsService.getProducts().subscribe((res: IProduct[]) => {
      this.products = this.selectedCategory
        ? res.filter((item) => item.category === this.selectedCategory)
        : res;
    });
  }
  /**
   * @description get categories for menu
   */
  getCategories(): void {
    this.productsService.getCategories().subscribe((res: ICategory[]) => {
      this.categories = res;
    });
  }
}
