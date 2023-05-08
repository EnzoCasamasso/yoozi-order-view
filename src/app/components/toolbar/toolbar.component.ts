import { Component, HostListener, Input, effect, signal } from '@angular/core';
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
  
  isScrolled = false;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    const scrollY = window.scrollY;
    this.isScrolled = scrollY > 1;
  }
}
