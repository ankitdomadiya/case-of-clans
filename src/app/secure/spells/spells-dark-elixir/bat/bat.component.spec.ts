import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatComponent } from './bat.component';

describe('BatComponent', () => {
  let component: BatComponent;
  let fixture: ComponentFixture<BatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BatComponent]
    });
    fixture = TestBed.createComponent(BatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
