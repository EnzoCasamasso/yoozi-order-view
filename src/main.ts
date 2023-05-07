import { bootstrapApplication } from '@angular/platform-browser';
import { Routes, provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

import { AppComponent } from './app/app.component';
import { ProductsComponent } from './app/routes/products/products.component';
import { UsersComponent } from './app/routes/users/users.component';

  export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home' , component: UsersComponent},
    {path: 'produtos' , component: ProductsComponent}
  ];
  
  bootstrapApplication(AppComponent,{
    providers: [
      provideRouter(routes),
      provideHttpClient(),
      provideAnimations()
    ]
  });