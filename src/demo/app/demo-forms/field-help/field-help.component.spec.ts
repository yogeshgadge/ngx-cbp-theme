import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CBPFieldHelpComponent } from './field-help.component';

describe('CBPFieldHelpComponent', () => {
  let component: CBPFieldHelpComponent;
  let fixture: ComponentFixture<CBPFieldHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CBPFieldHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CBPFieldHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
