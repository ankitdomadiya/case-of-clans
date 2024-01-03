import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogLauncherComponent } from './log-launcher.component';

describe('LogLauncherComponent', () => {
  let component: LogLauncherComponent;
  let fixture: ComponentFixture<LogLauncherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogLauncherComponent]
    });
    fixture = TestBed.createComponent(LogLauncherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
