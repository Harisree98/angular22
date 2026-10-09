import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Angulardirectives } from './angulardirectives';

describe('Angulardirectives', () => {
  let component: Angulardirectives;
  let fixture: ComponentFixture<Angulardirectives>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Angulardirectives],
    }).compileComponents();

    fixture = TestBed.createComponent(Angulardirectives);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
