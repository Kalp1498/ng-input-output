import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { SignInFornComponent } from './sign-in-forn/sign-in-forn.component';
import { SignInSignUpFormComponent } from './sign-in-sign-up-form.component';

@NgModule({
  declarations: [
    SignUpFormComponent,
    SignInFornComponent,
    SignInSignUpFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ], 
  exports: [
    SignUpFormComponent,
    SignInFornComponent,
    SignInSignUpFormComponent
  ]
})
export class SignInSignOutModule { }
