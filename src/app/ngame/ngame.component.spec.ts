import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgameComponent } from './ngame.component';

describe('NgameComponent', () => {
  let component: NgameComponent;
  let fixture: ComponentFixture<NgameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
