import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CBPFormFieldComponent } from './cbp-form-field.component';

describe('CBPFormFieldComponent', () => {
  let component: CBPFormFieldComponent;
  let fixture: ComponentFixture<CBPFormFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CBPFormFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CBPFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
