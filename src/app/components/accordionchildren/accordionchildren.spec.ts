import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Accordionchildren } from './accordionchildren';

describe('Accordionchildren', () => {
  let component: Accordionchildren;
  let fixture: ComponentFixture<Accordionchildren>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Accordionchildren],
    }).compileComponents();

    fixture = TestBed.createComponent(Accordionchildren);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
