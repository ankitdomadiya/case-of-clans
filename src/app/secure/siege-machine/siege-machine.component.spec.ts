import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiegeMachineComponent } from './siege-machine.component';

describe('SiegeMachineComponent', () => {
  let component: SiegeMachineComponent;
  let fixture: ComponentFixture<SiegeMachineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SiegeMachineComponent]
    });
    fixture = TestBed.createComponent(SiegeMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
