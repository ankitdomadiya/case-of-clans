import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellsElixirComponent } from './spells-elixir.component';

describe('SpellsElixirComponent', () => {
  let component: SpellsElixirComponent;
  let fixture: ComponentFixture<SpellsElixirComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpellsElixirComponent]
    });
    fixture = TestBed.createComponent(SpellsElixirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
