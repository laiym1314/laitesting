import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ngame1Component } from './ngame1.component';

describe('Ngame1Component', () => {
  let component: Ngame1Component;
  let fixture: ComponentFixture<Ngame1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ngame1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ngame1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
