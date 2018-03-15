import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneoperlistComponent } from './oneoperlist.component';

describe('OneoperlistComponent', () => {
  let component: OneoperlistComponent;
  let fixture: ComponentFixture<OneoperlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneoperlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneoperlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
