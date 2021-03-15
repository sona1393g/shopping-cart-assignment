import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category, Product } from 'src/app/interfaces/interfaces';
import { ProductsService } from 'src/app/products/services/products.service';
import { CartService } from 'src/app/shared/services/cart.service';

/**
 * @description this is the component for product listing
 */
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  categories: Category[] = [];
  selectedCategory = '';
  constructor(
    private readonly productsService: ProductsService,
    private readonly route: ActivatedRoute,
    private readonly cartService: CartService
  ) {}

  ngOnInit(): void {
    this.getCategories();
    this.route.queryParams.subscribe((res) => {
      this.selectedCategory = res.category;
      this.getProducts();
    });
  }
  /**
   * @description get products
   */
  getProducts(): void {
    this.productsService.getProducts().subscribe((res: Product[]) => {
      this.products = this.selectedCategory
        ? res.filter((item) => item.category === this.selectedCategory)
        : res;
      this.cartService.broadcastCart(this.products.filter(i => i.count), true);
    });
  }
  /**
   * @description get categories for menu
   */
  getCategories(): void {
    this.productsService.getCategories().subscribe((res: Category[]) => {
      this.categories = res;
    });
  }
}
