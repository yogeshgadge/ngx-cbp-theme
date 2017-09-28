import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFormsComponent } from './demo-forms.component';

describe('DemoFormsComponent', () => {
  let component: DemoFormsComponent;
  let fixture: ComponentFixture<DemoFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
