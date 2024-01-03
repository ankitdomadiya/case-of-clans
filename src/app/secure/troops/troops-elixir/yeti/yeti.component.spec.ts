import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YetiComponent } from './yeti.component';

describe('YetiComponent', () => {
  let component: YetiComponent;
  let fixture: ComponentFixture<YetiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YetiComponent]
    });
    fixture = TestBed.createComponent(YetiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
