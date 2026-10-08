import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Accordionparent } from './accordionparent';

describe('Accordionparent', () => {
  let component: Accordionparent;
  let fixture: ComponentFixture<Accordionparent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Accordionparent],
    }).compileComponents();

    fixture = TestBed.createComponent(Accordionparent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
