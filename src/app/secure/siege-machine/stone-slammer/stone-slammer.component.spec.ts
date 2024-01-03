import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoneSlammerComponent } from './stone-slammer.component';

describe('StoneSlammerComponent', () => {
  let component: StoneSlammerComponent;
  let fixture: ComponentFixture<StoneSlammerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoneSlammerComponent]
    });
    fixture = TestBed.createComponent(StoneSlammerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
