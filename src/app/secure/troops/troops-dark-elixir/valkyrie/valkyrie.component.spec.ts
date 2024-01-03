import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValkyrieComponent } from './valkyrie.component';

describe('ValkyrieComponent', () => {
  let component: ValkyrieComponent;
  let fixture: ComponentFixture<ValkyrieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValkyrieComponent]
    });
    fixture = TestBed.createComponent(ValkyrieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
