import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcherQueenComponent } from './archer-queen.component';

describe('ArcherQueenComponent', () => {
  let component: ArcherQueenComponent;
  let fixture: ComponentFixture<ArcherQueenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArcherQueenComponent]
    });
    fixture = TestBed.createComponent(ArcherQueenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
