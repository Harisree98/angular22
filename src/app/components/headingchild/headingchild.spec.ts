import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Headingchild } from './headingchild';

describe('Headingchild', () => {
  let component: Headingchild;
  let fixture: ComponentFixture<Headingchild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Headingchild],
    }).compileComponents();

    fixture = TestBed.createComponent(Headingchild);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
