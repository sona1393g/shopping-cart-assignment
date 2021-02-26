import { Component, Input, OnInit } from '@angular/core';
import { ICategory } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-plp-sidebar',
  templateUrl: './plp-sidebar.component.html',
  styleUrls: ['./plp-sidebar.component.scss']
})
export class PlpSidebarComponent implements OnInit {
  @Input() categories: ICategory[] = [];
  selectedCategory = '';
  dropdownFlag = false;
  constructor() { }

  ngOnInit(): void {
  }

  onCategorySelect(value='', index: number) {

  }
  dropdownToggle() {
    this.dropdownFlag = !this.dropdownFlag;
  }

}
