import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { getTestCategories } from 'src/app/testing/mockData';

import { SidebarComponent } from './sidebar.component';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [SidebarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    component.categories = getTestCategories();
    component.selectedCategory = component.categories[0].id;
    component.selectedCategoryName = component.categories[0].name;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update the route queryParam category', () => {
    const catId = getTestCategories()[0].id;
    component.onCategorySelect(catId);
    expect(component.selectedCategory).toEqual(catId);
  });
});
