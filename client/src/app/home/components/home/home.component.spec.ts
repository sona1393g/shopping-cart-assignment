import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Component } from '@angular/core';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { TestHomeService } from 'src/app/testing/test-home.service';
import { HomeService } from '../../services/home.service';

import { HomeComponent } from './home.component';
@Component({
  selector: 'app-carousel',
  template: '',
})
class CarouselComponent {}
describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let homeService: HomeService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [HomeComponent, CarouselComponent],
      providers: [{ provide: HomeService, useClass: TestHomeService }],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    homeService = fixture.debugElement.injector.get(HomeService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should h1 has the value Home page', () => {
    const nativeEl = fixture.nativeElement;
    expect(nativeEl.querySelector('h1').textContent).toContain('Home page');
  });
  it('should display Banners', fakeAsync(() => {
    component.ngOnInit();
    tick();
    expect(component.banners.length).toBeGreaterThan(0);
  }));
  it('should display categories', fakeAsync(() => {
    component.ngOnInit();
    tick();
    expect(component.categories.length).toBeGreaterThan(0);
  }));
});
