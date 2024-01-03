import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TroopsDarkElixirComponent } from './troops-dark-elixir.component';


describe('DarkElixirComponent', () => {
  let component: TroopsDarkElixirComponent;
  let fixture: ComponentFixture<TroopsDarkElixirComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TroopsDarkElixirComponent]
    });
    fixture = TestBed.createComponent(TroopsDarkElixirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
