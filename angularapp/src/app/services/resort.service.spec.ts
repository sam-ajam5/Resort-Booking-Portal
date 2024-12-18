import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ResortService } from './resort.service';

describe('ResortService', () => {
  let service: ResortService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ResortService]
    });

    service = TestBed.inject(ResortService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Ensure that there are no outstanding requests
  });

  fit('Frontend_should_create_the_resort_service', () => {
    expect(service).toBeTruthy();
  });
});
