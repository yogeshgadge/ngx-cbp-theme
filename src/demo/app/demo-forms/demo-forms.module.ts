import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DemoFormsComponent} from './demo-forms.component';
import {
    MD_ERROR_GLOBAL_OPTIONS, MdButtonModule, MdFormFieldModule, MdIconModule, MdInputModule,
    showOnDirtyErrorStateMatcher
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ExclaimBeforeErrorComponent } from './exclaim-before-error/exclaim-before-error.component';
import { CBPFieldHelpComponent } from './field-help/field-help.component';
import { CBPFormFieldComponent } from './cbp-form-field/cbp-form-field.component';

@NgModule({
    imports: [
        CommonModule,
        MdFormFieldModule,
        MdInputModule,
        FormsModule,
        ReactiveFormsModule,
        MdIconModule,
        MdButtonModule
    ],
    exports: [DemoFormsComponent],
    declarations: [DemoFormsComponent, ExclaimBeforeErrorComponent, CBPFieldHelpComponent, CBPFormFieldComponent],
    providers: [
        {provide: MD_ERROR_GLOBAL_OPTIONS, useValue: {errorStateMatcher: showOnDirtyErrorStateMatcher}}
    ]
})
export class DemoFormsModule {
}
