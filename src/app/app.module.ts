import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { SignInSignOutModule } from './authentication/sign-in-sign-up-form/sign-in-sign-out.module';
import { ProductMasterModule } from './productmaster/product-master.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SignInSignOutModule,
    ProductMasterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
