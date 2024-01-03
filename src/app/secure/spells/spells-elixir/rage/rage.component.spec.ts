import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RageComponent } from './rage.component';

describe('RageComponent', () => {
  let component: RageComponent;
  let fixture: ComponentFixture<RageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RageComponent]
    });
    fixture = TestBed.createComponent(RageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
