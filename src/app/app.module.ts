import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './productmaster/product-details/product-details.component';
import { FormsModule } from '@angular/forms';
import { StockstatusComponent } from './productmaster/stockstatus/stockstatus.component';
import { DeleteProductComponent } from './productmaster/delete-product/delete-product.component';
import { ProductmasterComponent } from './productmaster/productmaster.component';
import { AddproductComponent } from './productmaster/addproduct/addproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    StockstatusComponent,
    DeleteProductComponent,
    ProductmasterComponent,
    StockstatusComponent,
    AddproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
