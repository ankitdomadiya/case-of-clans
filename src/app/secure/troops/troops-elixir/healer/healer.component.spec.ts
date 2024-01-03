import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealerComponent } from './healer.component';

describe('HealerComponent', () => {
  let component: HealerComponent;
  let fixture: ComponentFixture<HealerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HealerComponent]
    });
    fixture = TestBed.createComponent(HealerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
