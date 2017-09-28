import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'demo-exclaim-before-error, md-form-field > md-error',
  templateUrl: './exclaim-before-error.component.html',
  styleUrls: ['./exclaim-before-error.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ExclaimBeforeErrorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
