import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { IUserDetails } from '../UserDetailsInterface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserLoginDetailService } from '../user-details.service';

@Component({
  selector: 'app-sign-in-forn',
  templateUrl: './sign-in-forn.component.html',
  styleUrls: ['./sign-in-forn.component.css']
})
export class SignInFornComponent implements OnInit {

  constructor(private userLoginDetails: UserLoginDetailService) { }

  userDetail: IUserDetails;
  userDetails: IUserDetails[];

  showPassword: boolean;
  showEmail: boolean;

  @Output() showView = new EventEmitter<string>();
  @Output() loginSuccess = new EventEmitter<boolean>();

  userLoginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('')
  })

  ngOnInit() {
    this.showEmail = true;
    this.showPassword = false;

    this.userDetails = this.userLoginDetails.getProductDetails();
  }

  changeView() {
    this.showView.emit('signup');
  }

  login() {
    this.userDetail = {
      email: this.userLoginForm.controls['email'].value,
      password: this.userLoginForm.controls['password'].value
    }

    if (this.showEmail) {
      this.userDetails.map(item => {
        if (item.email == this.userDetail.email) {
          this.showPassword = true;
          this.showEmail = false;
        }
      })
    }

    if (this.showPassword) {
      this.userDetails.map(item => {
        if (item.password == this.userDetail.password) {
          this.loginSuccess.emit(true);
        }
      })
    }
  }

}
