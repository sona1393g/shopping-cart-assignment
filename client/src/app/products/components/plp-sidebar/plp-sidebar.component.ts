import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-plp-sidebar',
  templateUrl: './plp-sidebar.component.html',
  styleUrls: ['./plp-sidebar.component.scss'],
})
export class PlpSidebarComponent implements OnInit {
  @Input() categories: ICategory[] = [];
  @Input() selectedCategory = '';
  dropdownFlag = false;
  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  onCategorySelect(value = ''): void {
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { category: value },
      queryParamsHandling: 'merge',
    });
  }
  dropdownToggle(): void {
    this.dropdownFlag = !this.dropdownFlag;
  }
}
