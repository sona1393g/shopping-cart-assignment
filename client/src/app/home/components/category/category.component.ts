import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PRODUCTS } from 'src/app/constants/routes.constants';
import { Category } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent {
  @Input() categories: Category[] = [];
  constructor(private readonly router: Router) {}

  onExplore(id?: string): void {
    this.router.navigate([PRODUCTS.url], { queryParams: { category: id } });
  }
}
