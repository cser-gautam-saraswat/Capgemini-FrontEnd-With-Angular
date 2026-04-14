import { TestBed } from '@angular/core/testing';

import { Httpservice, ProductType } from './httpservice';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

describe('Httpservice', () => {
  let service: Httpservice;

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  let testHttp: HttpTestingController;

  let expectedProducts: ProductType[] = [
    {
      id: 1,
      title: 'prod 1',
      image: 'some address',
      price:100
    },
    {
      id: 2,
      title: 'prod 1',
      image: 'some address',
      price:200
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[Httpservice, provideHttpClientTesting()]
    });
    service = TestBed.inject(Httpservice);
    testHttp = TestBed.inject(HttpTestingController)
  });

  afterEach(()=>{
    testHttp.verify()
  })

  it('should get products from api',()=>{
    service.getData().subscribe({
      next:(data)=>{
        expect(data).toEqual(expectedProducts)
        expect(data.length).toBe(2)
      }
    })
    const req = testHttp.expectOne('https://fakestoreapi.com/products');
    expect(req.request.method).toBe('GET');

    req.flush(expectedProducts); 
  });
});
