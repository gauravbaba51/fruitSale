import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharetableComponent } from './sharetable.component';

describe('SharetableComponent', () => {
  let component: SharetableComponent;
  let fixture: ComponentFixture<SharetableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharetableComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
