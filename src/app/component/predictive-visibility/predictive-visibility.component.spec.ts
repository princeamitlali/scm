import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictiveVisibilityComponent } from './predictive-visibility.component';

describe('PredictiveVisibilityComponent', () => {
  let component: PredictiveVisibilityComponent;
  let fixture: ComponentFixture<PredictiveVisibilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PredictiveVisibilityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PredictiveVisibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
