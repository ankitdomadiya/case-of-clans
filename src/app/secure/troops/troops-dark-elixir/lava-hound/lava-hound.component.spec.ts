import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LavaHoundComponent } from './lava-hound.component';

describe('LavaHoundComponent', () => {
  let component: LavaHoundComponent;
  let fixture: ComponentFixture<LavaHoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LavaHoundComponent]
    });
    fixture = TestBed.createComponent(LavaHoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
