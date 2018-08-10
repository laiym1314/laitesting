import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Info4Component } from './info4.component';

describe('Info4Component', () => {
  let component: Info4Component;
  let fixture: ComponentFixture<Info4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Info4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Info4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
