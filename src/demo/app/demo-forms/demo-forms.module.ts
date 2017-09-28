import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DemoFormsComponent} from './demo-forms.component';
import {
    MD_ERROR_GLOBAL_OPTIONS, MdFormFieldModule, MdIconModule, MdInputModule,
    showOnDirtyErrorStateMatcher
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ExclaimBeforeErrorComponent } from './exclaim-before-error/exclaim-before-error.component';

@NgModule({
    imports: [
        CommonModule,
        MdFormFieldModule,
        MdInputModule,
        FormsModule,
        ReactiveFormsModule,
        MdIconModule
    ],
    exports: [DemoFormsComponent],
    declarations: [DemoFormsComponent, ExclaimBeforeErrorComponent],
    providers: [
        {provide: MD_ERROR_GLOBAL_OPTIONS, useValue: {errorStateMatcher: showOnDirtyErrorStateMatcher}}
    ]
})
export class DemoFormsModule {
}
