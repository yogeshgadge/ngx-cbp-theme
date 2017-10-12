import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DemoFormsComponent} from './demo-forms.component';
import {
    ErrorStateMatcher,
    MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule,
    ShowOnDirtyErrorStateMatcher
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ExclaimBeforeErrorComponent } from './exclaim-before-error/exclaim-before-error.component';
import { CBPFieldHelpComponent } from './field-help/field-help.component';
import { CBPFormFieldComponent } from './cbp-form-field/cbp-form-field.component';

@NgModule({
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
        MatButtonModule
    ],
    exports: [DemoFormsComponent],
    declarations: [DemoFormsComponent, ExclaimBeforeErrorComponent, CBPFieldHelpComponent, CBPFormFieldComponent],
    providers: [
        {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
    ]
})
export class DemoFormsModule {
}
