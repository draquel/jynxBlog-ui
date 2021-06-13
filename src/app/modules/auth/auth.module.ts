import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AuthComponent } from './auth.component';
import {AuthRoutingModule} from './auth-routing.module';

// noinspection AngularInvalidImportedOrDeclaredSymbol
@NgModule({
  declarations: [
    AuthComponent,
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class AuthModule { }
