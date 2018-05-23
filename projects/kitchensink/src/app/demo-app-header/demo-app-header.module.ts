import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoAppHeaderComponent } from './demo-app-header.component';
import {CBPAppHeaderModule} from 'ngx-cbp-theme';
import {MatIconModule, MatTabsModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule, CBPAppHeaderModule, MatIconModule, MatTabsModule, FlexLayoutModule
  ],
  declarations: [DemoAppHeaderComponent],
  exports: [DemoAppHeaderComponent]
})
export class DemoAppHeaderModule { }
