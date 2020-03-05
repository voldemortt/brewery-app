import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { BreweryService } from './brewery.service';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http'; 

describe('BreweryService', () => {
  let injector: TestBed;
  let service: BreweryService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({imports : [
      HttpClientTestingModule,
    HttpClientModule,
    
    HttpModule], providers: [BreweryService]});
    
    injector = getTestBed();
    service = injector.get(BreweryService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    const service: BreweryService = TestBed.get(BreweryService);
    expect(service).toBeTruthy();
  });

  describe('#getAllBreweries', () => {
    it('should return an Observable<Brewery>', () => {
  
      service.getAllBreweries().subscribe((beweries:any) => {
        expect(beweries.length).toBe(2);
      });
  
    });
  });
});
