import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnChanges {
  @Input() categories: Category[] = [];
  @Input() selectedCategory: string | undefined;
  dropdownFlag = false;
  selectedCategoryName: string | undefined;
  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.selectedCategory?.currentValue) {
      this.selectedCategoryName = this.categories.find(
        (item) => item.id === this.selectedCategory
      )?.name;
    } else {
      this.selectedCategoryName = '';
    }
  }

  onCategorySelect(category = ''): void {
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { category },
      queryParamsHandling: 'merge',
    });
  }
  dropdownToggle(): void {
    this.dropdownFlag = !this.dropdownFlag;
  }
}
