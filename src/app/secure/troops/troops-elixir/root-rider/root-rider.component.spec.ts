import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootRiderComponent } from './root-rider.component';

describe('RootRiderComponent', () => {
  let component: RootRiderComponent;
  let fixture: ComponentFixture<RootRiderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RootRiderComponent]
    });
    fixture = TestBed.createComponent(RootRiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
