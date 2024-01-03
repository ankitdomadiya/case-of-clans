import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyDragonComponent } from './baby-dragon.component';

describe('BabyDragonComponent', () => {
  let component: BabyDragonComponent;
  let fixture: ComponentFixture<BabyDragonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BabyDragonComponent]
    });
    fixture = TestBed.createComponent(BabyDragonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
