import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvisiblityComponent } from './invisiblity.component';

describe('InvisiblityComponent', () => {
  let component: InvisiblityComponent;
  let fixture: ComponentFixture<InvisiblityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvisiblityComponent]
    });
    fixture = TestBed.createComponent(InvisiblityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
