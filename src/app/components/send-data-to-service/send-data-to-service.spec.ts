import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SendDataToService } from './send-data-to-service';

describe('SendDataToService', () => {
  let component: SendDataToService;
  let fixture: ComponentFixture<SendDataToService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SendDataToService],
    }).compileComponents();

    fixture = TestBed.createComponent(SendDataToService);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
