import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-additional-help, cbp-field-hint, [additionalHint]',
  templateUrl: './field-help.component.html',
  styleUrls: ['./field-help.component.scss']
})
export class CBPFieldHelpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openAdditionalHelp(key: string, $event: Event) {
      $event.stopPropagation();
  }

}
