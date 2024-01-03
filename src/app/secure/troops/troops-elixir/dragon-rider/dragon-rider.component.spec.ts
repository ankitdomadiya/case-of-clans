import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonRiderComponent } from './dragon-rider.component';

describe('DragonRiderComponent', () => {
  let component: DragonRiderComponent;
  let fixture: ComponentFixture<DragonRiderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DragonRiderComponent]
    });
    fixture = TestBed.createComponent(DragonRiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
