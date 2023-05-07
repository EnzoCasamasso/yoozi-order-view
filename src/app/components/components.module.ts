import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CardSubscribeComponent } from './card-subscribe/card-subscribe.component';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ToolbarComponent,
    CardSubscribeComponent
  ],
  exports: [ToolbarComponent,CardSubscribeComponent]
})
export class ComponentsModule { }
