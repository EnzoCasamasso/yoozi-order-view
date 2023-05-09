import { CommonModule } from '@angular/common';
import { Component, effect, signal } from '@angular/core';
import { ComponentsModule } from './components/components.module';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [CommonModule, ComponentsModule, RouterOutlet]
})
export class AppComponent {
  count = signal<number>(0)

  constructor() {
    effect(() => {
      console.log(`This is a valus of count: ${this.count()}`)
    })
  }

  update() {
    this.count.update((value) => value + 1)
  }
}
