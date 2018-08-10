import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ngame3Component } from './ngame3.component';

describe('Ngame3Component', () => {
  let component: Ngame3Component;
  let fixture: ComponentFixture<Ngame3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ngame3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ngame3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
