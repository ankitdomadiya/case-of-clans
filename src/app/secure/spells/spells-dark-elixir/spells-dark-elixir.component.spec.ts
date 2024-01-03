import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellsDarkElixirComponent } from './spells-dark-elixir.component';

describe('SpellsDarkElixirComponent', () => {
  let component: SpellsDarkElixirComponent;
  let fixture: ComponentFixture<SpellsDarkElixirComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpellsDarkElixirComponent]
    });
    fixture = TestBed.createComponent(SpellsDarkElixirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
