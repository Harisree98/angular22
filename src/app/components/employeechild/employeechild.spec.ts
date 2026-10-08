import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Employeechild } from './employeechild';

describe('Employeechild', () => {
  let component: Employeechild;
  let fixture: ComponentFixture<Employeechild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Employeechild],
    }).compileComponents();

    fixture = TestBed.createComponent(Employeechild);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
