import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcherComponent } from './archer.component';

describe('ArcherComponent', () => {
  let component: ArcherComponent;
  let fixture: ComponentFixture<ArcherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArcherComponent]
    });
    fixture = TestBed.createComponent(ArcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
