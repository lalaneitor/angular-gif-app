import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  SidebarComponent } from './components/sidebar/sidebar.component';
import { LazzyImageComponent } from './components/lazzy-image/lazzy-image.component';



@NgModule({
  declarations: [
    SidebarComponent,
    LazzyImageComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    SidebarComponent,
    LazzyImageComponent
  ]
})
export class ShareModule { }
