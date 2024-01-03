import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarbarianKingComponent } from './barbarian-king.component';

describe('BarbarianKingComponent', () => {
  let component: BarbarianKingComponent;
  let fixture: ComponentFixture<BarbarianKingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarbarianKingComponent]
    });
    fixture = TestBed.createComponent(BarbarianKingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
