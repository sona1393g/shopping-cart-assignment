import { Component, Input, OnInit } from '@angular/core';
import { ICategory } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  @Input() categories: ICategory[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  onExplore(id?: string) {

  }

}
