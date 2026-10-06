import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeSkills } from './employee-skills';

describe('EmployeeSkills', () => {
  let component: EmployeeSkills;
  let fixture: ComponentFixture<EmployeeSkills>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeSkills],
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeeSkills);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
