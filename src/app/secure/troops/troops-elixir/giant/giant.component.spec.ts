import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiantComponent } from './giant.component';

describe('GiantComponent', () => {
  let component: GiantComponent;
  let fixture: ComponentFixture<GiantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GiantComponent]
    });
    fixture = TestBed.createComponent(GiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
