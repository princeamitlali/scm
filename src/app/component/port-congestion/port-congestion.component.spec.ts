import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortCongestionComponent } from './port-congestion.component';

describe('PortCongestionComponent', () => {
  let component: PortCongestionComponent;
  let fixture: ComponentFixture<PortCongestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PortCongestionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortCongestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
