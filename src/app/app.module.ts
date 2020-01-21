import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './productmaster/product-details/product-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StockstatusComponent } from './productmaster/stockstatus/stockstatus.component';
import { DeleteProductComponent } from './productmaster/delete-product/delete-product.component';
import { ProductmasterComponent } from './productmaster/productmaster.component';
import { AddproductComponent } from './productmaster/addproduct/addproduct.component';
import { ProductSortingComponent } from './productmaster/product-sorting/product-sorting.component';
import { SignUpFormComponent } from './productmaster/sign-in-sign-up-form/sign-up-form/sign-up-form.component';
import { SignInFornComponent } from './productmaster/sign-in-sign-up-form/sign-in-forn/sign-in-forn.component';
import { SignInSignUpFormComponent } from './productmaster/sign-in-sign-up-form/sign-in-sign-up-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    StockstatusComponent,
    DeleteProductComponent,
    ProductmasterComponent,
    StockstatusComponent,
    AddproductComponent,
    ProductSortingComponent,
    SignUpFormComponent,
    SignInFornComponent,
    SignInSignUpFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
