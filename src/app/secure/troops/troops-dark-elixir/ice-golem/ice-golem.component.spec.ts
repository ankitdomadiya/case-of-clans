import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IceGolemComponent } from './ice-golem.component';

describe('IceGolemComponent', () => {
  let component: IceGolemComponent;
  let fixture: ComponentFixture<IceGolemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IceGolemComponent]
    });
    fixture = TestBed.createComponent(IceGolemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
