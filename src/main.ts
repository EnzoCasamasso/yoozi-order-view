import { bootstrapApplication } from '@angular/platform-browser';
import { Routes, provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

import { AppComponent } from './app/app.component';
import { ProductsComponent } from './app/routes/products/products.component';
import { HomeComponent } from './app/routes/home/home.component';
import { DashboardComponent } from './app/routes/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'produtos', component: ProductsComponent },
  { path: 'dashboard', component: DashboardComponent },
];

export const adminRoutes: Routes = [];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), provideHttpClient(), provideAnimations()],
});
