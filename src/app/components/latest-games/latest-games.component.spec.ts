import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestGamesComponent } from './latest-games.component';

describe('LatestGamesComponent', () => {
  let component: LatestGamesComponent;
  let fixture: ComponentFixture<LatestGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
