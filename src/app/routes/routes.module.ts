import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { LoginModule } from './login/login.module';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    //standalone-components
    ProductsComponent,
    UsersComponent,
    LoginModule,
  ]
})
export class RoutesModule { }
