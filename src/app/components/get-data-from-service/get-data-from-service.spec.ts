import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GetDataFromService } from './get-data-from-service';

describe('GetDataFromService', () => {
  let component: GetDataFromService;
  let fixture: ComponentFixture<GetDataFromService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetDataFromService],
    }).compileComponents();

    fixture = TestBed.createComponent(GetDataFromService);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
