import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SignInSignOutModule } from '../authentication/sign-in-sign-up-form/sign-in-sign-out.module';

import { ProductmasterComponent } from './productmaster.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AddproductComponent } from './add-product/addproduct.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { StockstatusComponent } from './stoc-kstatus/stockstatus.component';
import { ProductSortingComponent } from './product-sorting/product-sorting.component';

@NgModule({
  declarations: [
    ProductmasterComponent,
    ProductDetailsComponent,
    AddproductComponent,
    DeleteProductComponent,
    StockstatusComponent,
    ProductSortingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SignInSignOutModule
  ],
  exports: [
    ProductmasterComponent,
    ProductDetailsComponent,
    AddproductComponent,
    DeleteProductComponent,
    StockstatusComponent,
    ProductSortingComponent
  ]
})
export class ProductMasterModule { }
