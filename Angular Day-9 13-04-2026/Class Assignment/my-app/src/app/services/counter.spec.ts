import { TestBed } from '@angular/core/testing';

import { Counter } from './counter';

describe('Counter', () => {
  let service: Counter;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Counter);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

   it('should have initial count as 0', () => {
    expect(service.count).toBe(0);
  });

  it('should increment count', () => {
    service.incrementCount();
    expect(service.count).toBe(1);
  });

  it('should decrement count', () => {
    service.decrementCount();
    expect(service.count).toBe(-1);
  });
});
