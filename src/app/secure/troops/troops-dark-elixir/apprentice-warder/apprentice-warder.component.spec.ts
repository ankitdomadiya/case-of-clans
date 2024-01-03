import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprenticeWarderComponent } from './apprentice-warder.component';

describe('ApprenticeWarderComponent', () => {
  let component: ApprenticeWarderComponent;
  let fixture: ComponentFixture<ApprenticeWarderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApprenticeWarderComponent]
    });
    fixture = TestBed.createComponent(ApprenticeWarderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
