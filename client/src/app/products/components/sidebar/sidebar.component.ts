import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
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
