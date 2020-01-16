import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FormsModule } from '@angular/forms';
import { StockStatusComponent } from './stock-status/stock-status.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    StockStatusComponent,
    DeleteProductComponent
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
