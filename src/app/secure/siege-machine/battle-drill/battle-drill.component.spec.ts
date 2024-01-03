import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleDrillComponent } from './battle-drill.component';

describe('BattleDrillComponent', () => {
  let component: BattleDrillComponent;
  let fixture: ComponentFixture<BattleDrillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BattleDrillComponent]
    });
    fixture = TestBed.createComponent(BattleDrillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
