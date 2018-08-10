import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ngame4Component } from './ngame4.component';

describe('Ngame4Component', () => {
  let component: Ngame4Component;
  let fixture: ComponentFixture<Ngame4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ngame4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ngame4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
