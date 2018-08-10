import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ngame5Component } from './ngame5.component';

describe('Ngame5Component', () => {
  let component: Ngame5Component;
  let fixture: ComponentFixture<Ngame5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ngame5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ngame5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
