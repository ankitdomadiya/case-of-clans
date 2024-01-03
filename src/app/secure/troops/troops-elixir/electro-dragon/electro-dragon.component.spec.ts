import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectroDragonComponent } from './electro-dragon.component';

describe('ElectroDragonComponent', () => {
  let component: ElectroDragonComponent;
  let fixture: ComponentFixture<ElectroDragonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElectroDragonComponent]
    });
    fixture = TestBed.createComponent(ElectroDragonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
