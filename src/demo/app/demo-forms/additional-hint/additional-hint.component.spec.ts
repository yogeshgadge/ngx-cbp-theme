import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalHintComponent } from './additional-hint.component';

describe('AdditionalHintComponent', () => {
  let component: AdditionalHintComponent;
  let fixture: ComponentFixture<AdditionalHintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditionalHintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalHintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
