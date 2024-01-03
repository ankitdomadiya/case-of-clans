import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlameFlingerComponent } from './flame-flinger.component';

describe('FlameFlingerComponent', () => {
  let component: FlameFlingerComponent;
  let fixture: ComponentFixture<FlameFlingerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlameFlingerComponent]
    });
    fixture = TestBed.createComponent(FlameFlingerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
