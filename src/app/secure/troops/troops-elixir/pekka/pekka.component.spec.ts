import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PekkaComponent } from './pekka.component';

describe('PekkaComponent', () => {
  let component: PekkaComponent;
  let fixture: ComponentFixture<PekkaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PekkaComponent]
    });
    fixture = TestBed.createComponent(PekkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
