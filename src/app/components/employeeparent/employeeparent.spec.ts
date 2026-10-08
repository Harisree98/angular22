import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Employeeparent } from './employeeparent';

describe('Employeeparent', () => {
  let component: Employeeparent;
  let fixture: ComponentFixture<Employeeparent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Employeeparent],
    }).compileComponents();

    fixture = TestBed.createComponent(Employeeparent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
