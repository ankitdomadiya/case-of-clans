import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WallWreckerComponent } from './wall-wrecker.component';

describe('WallWreckerComponent', () => {
  let component: WallWreckerComponent;
  let fixture: ComponentFixture<WallWreckerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WallWreckerComponent]
    });
    fixture = TestBed.createComponent(WallWreckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
