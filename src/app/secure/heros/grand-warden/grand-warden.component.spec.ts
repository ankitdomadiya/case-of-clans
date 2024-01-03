import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandWardenComponent } from './grand-warden.component';

describe('GrandWardenComponent', () => {
  let component: GrandWardenComponent;
  let fixture: ComponentFixture<GrandWardenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrandWardenComponent]
    });
    fixture = TestBed.createComponent(GrandWardenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
