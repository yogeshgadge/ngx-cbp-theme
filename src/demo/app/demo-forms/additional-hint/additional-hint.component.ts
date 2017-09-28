import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-additional-hint, [additionalHint]',
  templateUrl: './additional-hint.component.html',
  styleUrls: ['./additional-hint.component.scss']
})
export class AdditionalHintComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openAdditionalHelp(key: string, $event: Event) {
      $event.stopPropagation();
  }

}
