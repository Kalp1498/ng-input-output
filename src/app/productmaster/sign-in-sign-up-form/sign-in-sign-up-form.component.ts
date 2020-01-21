import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IUserDetails } from './UserDetailsInterface';
import { UserLoginDetailService } from './user-details.service';

@Component({
  selector: 'app-sign-in-sign-up-form',
  templateUrl: './sign-in-sign-up-form.component.html',
  styleUrls: ['./sign-in-sign-up-form.component.css'],
  providers: [UserLoginDetailService]
})
export class SignInSignUpFormComponent implements OnInit {

  constructor() { }

  @Output() loginSuccess = new EventEmitter<boolean>();

  userDetails: IUserDetails;
  showView: string ;

  ngOnInit() {
    this.showView = 'signup';
  }

  changeView(view: string) {
    this.showView = view;
  }

  getUserDetails(userDetails: IUserDetails) {
    this.userDetails = userDetails;
  }

  getLoginStatus(success: boolean) {
    this.loginSuccess.emit(success);
  }

}
