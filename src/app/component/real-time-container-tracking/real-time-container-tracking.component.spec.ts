import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealTimeContainerTrackingComponent } from './real-time-container-tracking.component';

describe('RealTimeContainerTrackingComponent', () => {
  let component: RealTimeContainerTrackingComponent;
  let fixture: ComponentFixture<RealTimeContainerTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RealTimeContainerTrackingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RealTimeContainerTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
