import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Info5Component } from './info5.component';

describe('Info5Component', () => {
  let component: Info5Component;
  let fixture: ComponentFixture<Info5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Info5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Info5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
