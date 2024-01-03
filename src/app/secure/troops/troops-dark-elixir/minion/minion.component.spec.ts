import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinionComponent } from './minion.component';

describe('MinionComponent', () => {
  let component: MinionComponent;
  let fixture: ComponentFixture<MinionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MinionComponent]
    });
    fixture = TestBed.createComponent(MinionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
