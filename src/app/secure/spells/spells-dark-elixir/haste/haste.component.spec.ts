import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HasteComponent } from './haste.component';

describe('HasteComponent', () => {
  let component: HasteComponent;
  let fixture: ComponentFixture<HasteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HasteComponent]
    });
    fixture = TestBed.createComponent(HasteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
