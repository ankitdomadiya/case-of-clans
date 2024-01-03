import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleBlimpComponent } from './battle-blimp.component';

describe('BattleBlimpComponent', () => {
  let component: BattleBlimpComponent;
  let fixture: ComponentFixture<BattleBlimpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BattleBlimpComponent]
    });
    fixture = TestBed.createComponent(BattleBlimpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
