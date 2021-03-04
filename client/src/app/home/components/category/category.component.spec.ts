import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { CategoryComponent } from './category.component';
import {
  RouterTestingModule,
} from '@angular/router/testing';
import { getTestBanners, getTestCategories } from 'src/app/testing/mockData';

const CATEGORIES = getTestCategories();

describe('CategoryComponent', () => {
  let component: CategoryComponent;
  let fixture: ComponentFixture<CategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [CategoryComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should not have categories after construction', () => {
    expect(component.categories).toEqual([]);
  });
});
