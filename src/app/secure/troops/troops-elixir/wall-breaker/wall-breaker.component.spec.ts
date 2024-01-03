import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WallBreakerComponent } from './wall-breaker.component';

describe('WallBreakerComponent', () => {
  let component: WallBreakerComponent;
  let fixture: ComponentFixture<WallBreakerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WallBreakerComponent]
    });
    fixture = TestBed.createComponent(WallBreakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
