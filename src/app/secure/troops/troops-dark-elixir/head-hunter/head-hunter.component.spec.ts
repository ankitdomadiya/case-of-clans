import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadHunterComponent } from './head-hunter.component';

describe('HeadHunterComponent', () => {
  let component: HeadHunterComponent;
  let fixture: ComponentFixture<HeadHunterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeadHunterComponent]
    });
    fixture = TestBed.createComponent(HeadHunterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
