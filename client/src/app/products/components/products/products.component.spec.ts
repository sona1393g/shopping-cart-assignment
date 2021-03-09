import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
  waitForAsync,
} from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { getTestCategories, getTestProducts } from 'src/app/testing/mockData';
import { TestProductService } from 'src/app/testing/test-product.service';
import { ProductsService } from '../../services/products.service';

import { ProductsComponent } from './products.component';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let activatedRoute: ActivatedRoute;
  let productsService: ProductsService;
  let selectedCategory: string | null | undefined;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [ProductsComponent],
      providers: [
        { provide: ProductsService, useClass: TestProductService },
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of({ category: getTestCategories()[0].id }),
          },
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    productsService = fixture.debugElement.injector.get(ProductsService);
    activatedRoute = fixture.debugElement.injector.get(ActivatedRoute);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display categories', fakeAsync(() => {
    component.ngOnInit();
    tick();
    expect(component.categories.length).toBeGreaterThan(0);
  }));

  it('category is selected (filtered products)', fakeAsync(() => {
    component.ngOnInit();
    activatedRoute.queryParams.subscribe((res) => {
      selectedCategory = res.category;
    });
    tick();
    expect(selectedCategory).toEqual(component.selectedCategory);
    expect(component.products).toEqual(
      getTestProducts().filter((item) => item.category === selectedCategory)
    );
  }));
});
