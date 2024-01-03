import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigeBarracksComponent } from './sige-barracks.component';

describe('SigeBarracksComponent', () => {
  let component: SigeBarracksComponent;
  let fixture: ComponentFixture<SigeBarracksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SigeBarracksComponent]
    });
    fixture = TestBed.createComponent(SigeBarracksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
