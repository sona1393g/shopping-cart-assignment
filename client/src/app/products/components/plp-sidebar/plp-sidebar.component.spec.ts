import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlpSidebarComponent } from './plp-sidebar.component';

describe('PlpSidebarComponent', () => {
  let component: PlpSidebarComponent;
  let fixture: ComponentFixture<PlpSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlpSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlpSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
