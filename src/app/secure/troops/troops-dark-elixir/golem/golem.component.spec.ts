import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GolemComponent } from './golem.component';

describe('GolemComponent', () => {
  let component: GolemComponent;
  let fixture: ComponentFixture<GolemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GolemComponent]
    });
    fixture = TestBed.createComponent(GolemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
