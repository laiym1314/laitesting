import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ngame2Component } from './ngame2.component';

describe('Ngame2Component', () => {
  let component: Ngame2Component;
  let fixture: ComponentFixture<Ngame2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ngame2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ngame2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
