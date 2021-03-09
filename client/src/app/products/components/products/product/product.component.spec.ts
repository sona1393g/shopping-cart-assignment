import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartService } from 'src/app/shared/services/cart.service';
import { getTestProducts } from 'src/app/testing/mockData';

import { ProductComponent } from './product.component';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  let cartService: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ProductComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    component.product = getTestProducts()[0];
    cartService = TestBed.inject(CartService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call buyNow() and check if cart has the item', () => {
    component.buyNow();
    cartService.getItemOfCart().subscribe((res) => {
      expect(component.product.count).toBeGreaterThan(0);
    });
  });
  it('should description has the value', () => {
    const el = fixture.nativeElement;
    expect(el.querySelector('p').textContent).toContain(
      component.product.description
    );
  });
});
