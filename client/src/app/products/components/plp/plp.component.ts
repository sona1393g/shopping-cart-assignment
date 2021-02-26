import { Component, OnInit } from '@angular/core';
import { ICategory, IProduct } from 'src/app/interfaces/interfaces';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-plp',
  templateUrl: './plp.component.html',
  styleUrls: ['./plp.component.scss']
})
export class PlpComponent implements OnInit {
  products: IProduct[] =[];
  categories: ICategory[] =[];
  constructor(private readonly productsService: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }
  getProducts() {
    this.productsService.getProducts().subscribe((res: IProduct[]) => {
      this.products = res;
    })
  }
  getCategories() {
    this.productsService.getCategories().subscribe((res: ICategory[]) => {
      this.categories = res;
    })
  }

}
