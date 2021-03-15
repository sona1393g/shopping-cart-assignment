import { HttpClient, HttpClientModule } from '@angular/common/http';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HomeService } from './home.service';
import { Banner, Category } from 'src/app/interfaces/interfaces';
import { environment } from '../../../environments/environment';
import { ApiEndPoints } from 'src/app/constants/apiEndPoints';
import { getTestBanners, getTestCategories } from 'src/app/testing/mockData';
import { asyncData } from 'src/app/testing/async-observable-helpers';
import { TestHomeService } from 'src/app/testing/test-home.service';

describe('HomeService', () => {
  let service: HomeService;
  let httpMock: HttpTestingController;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provider: HomeService, useClass: TestHomeService }],
    });
    httpMock = TestBed.inject(HttpTestingController);
  });
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new HomeService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should return expected banners (HttpClient called once)', () => {
    const expectedBanners: Banner[] = getTestBanners();

    httpClientSpy.get.and.returnValue(asyncData(expectedBanners));

    service
      .getBanners()
      .subscribe(
        (banners) =>
          expect(banners).toEqual(expectedBanners, 'expected banners'),
        fail
      );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });
  it('should return expected categories (HttpClient called once)', () => {
    const expectedCategories: Category[] = getTestCategories();

    httpClientSpy.get.and.returnValue(asyncData(expectedCategories));

    service
      .getCategories()
      .subscribe(
        (cat) => expect(cat).toEqual(expectedCategories, 'expected categories'),
        fail
      );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });
});
