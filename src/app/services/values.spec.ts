import { TestBed } from '@angular/core/testing';
import { Values } from './values';

describe('Values', () => {
  let service: Values;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Values);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
