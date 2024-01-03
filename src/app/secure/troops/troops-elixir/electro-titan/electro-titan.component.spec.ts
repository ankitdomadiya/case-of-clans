import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectroTitanComponent } from './electro-titan.component';

describe('ElectroTitanComponent', () => {
  let component: ElectroTitanComponent;
  let fixture: ComponentFixture<ElectroTitanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElectroTitanComponent]
    });
    fixture = TestBed.createComponent(ElectroTitanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
