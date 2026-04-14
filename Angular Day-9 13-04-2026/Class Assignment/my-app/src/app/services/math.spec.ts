import { TestBed } from '@angular/core/testing';

import { Math } from './math';

describe('Math', () => {
  let service: Math;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Math);
  });

  it('should add 2 numbers', () => {
    let res = service.add(2, 3);
    expect(res).toBe(5);
  });

  it('should subtract 2 numbers', () => {
    expect(service.subtract(5, 3)).toBe(2);
  });

  it('should multiply 2 numbers', () => {
    expect(service.multiply(2, 3)).toBe(6);
  });


  it('should divide 2 numbers', () => {
    expect(service.divide(10, 2)).toBe(5);
  });

  it('should throw error when dividing by zero', () => {
    expect(() => service.divide(10, 0)).toThrowError('Cannot divide by zero');
  });


});
