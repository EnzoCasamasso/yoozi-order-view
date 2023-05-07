import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoutesModule } from './routes/routes.module';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RoutesModule,
    ComponentsModule,
    AppComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
