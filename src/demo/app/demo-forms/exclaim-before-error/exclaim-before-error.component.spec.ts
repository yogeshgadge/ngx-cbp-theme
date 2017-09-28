import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExclaimBeforeErrorComponent } from './exclaim-before-error.component';

describe('ExclaimBeforeErrorComponent', () => {
  let component: ExclaimBeforeErrorComponent;
  let fixture: ComponentFixture<ExclaimBeforeErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExclaimBeforeErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExclaimBeforeErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
