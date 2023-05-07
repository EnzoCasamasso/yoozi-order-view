import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ToolbarComponent
  ],
  exports: [ToolbarComponent]
})
export class ComponentsModule { }
