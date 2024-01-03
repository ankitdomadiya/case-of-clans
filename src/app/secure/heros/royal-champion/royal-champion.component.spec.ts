import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoyalChampionComponent } from './royal-champion.component';

describe('RoyalChampionComponent', () => {
  let component: RoyalChampionComponent;
  let fixture: ComponentFixture<RoyalChampionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoyalChampionComponent]
    });
    fixture = TestBed.createComponent(RoyalChampionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
