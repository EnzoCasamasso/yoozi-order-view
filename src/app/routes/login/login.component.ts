import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  name = signal<string>('Enzo Casamasso')

  constructor() {

  }
}
