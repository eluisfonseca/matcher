import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatcherModalComponent } from './matcher-modal.component';

describe('MatcherModalComponent', () => {
  let component: MatcherModalComponent;
  let fixture: ComponentFixture<MatcherModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatcherModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatcherModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
