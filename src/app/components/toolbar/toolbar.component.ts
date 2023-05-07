import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

type NavButton = {
  name: string;
  route?: string;
}

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toolbar.component.html'
})
export class ToolbarComponent {
  @Input({required: true}) navButtons: NavButton[] = [];

}
