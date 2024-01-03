import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HogRiderComponent } from './hog-rider.component';

describe('HogRiderComponent', () => {
  let component: HogRiderComponent;
  let fixture: ComponentFixture<HogRiderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HogRiderComponent]
    });
    fixture = TestBed.createComponent(HogRiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
