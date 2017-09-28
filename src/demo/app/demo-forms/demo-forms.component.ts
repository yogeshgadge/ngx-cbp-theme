import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
    selector: 'demo-forms',
    templateUrl: './demo-forms.component.html',
    styleUrls: ['./demo-forms.component.scss']
})
export class DemoFormsComponent implements OnInit {

    fiveDigitNumberCtrl = new FormControl('', [
        Validators.required,
        Validators.pattern(/^[0-9]*$/),
        Validators.maxLength(5)]);

    constructor() {
    }

    ngOnInit() {
    }

}
