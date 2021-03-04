import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HomeService } from './home.service';
import { IBanner, ICategory } from 'src/app/interfaces/interfaces';
import { environment } from '../../../environments/environment';
import { ApiEndPoints } from 'src/app/constants/apiEndPoints';
import { getTestBanners, getTestCategories } from 'src/app/testing/mockData';

describe('HomeService', () => {
  let service: HomeService;
  let httpMock: HttpTestingController;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HomeService],
    });
    service = TestBed.inject(HomeService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return expected Banners', () => {
    const expectedBanners: IBanner[] = getTestBanners();
    service
      .getBanners()
      .subscribe(
        (data) => expect(data).toEqual(expectedBanners, 'expected Banners'),
        fail
      );
  });
  it('should return expected Categories', () => {
    const expectedCategories: ICategory[] = getTestCategories();
    service
      .getCategories()
      .subscribe(
        (data) =>
          expect(data).toEqual(expectedCategories, 'expected Categories'),
        fail
      );
  });
});
