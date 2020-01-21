import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { IUsers } from '../../../models/users-interface';
import { UserLoginDetailService } from '../../../services/user-details.service';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {

  constructor(private userLoginDetails: UserLoginDetailService) { }

  userDetailsArray: IUsers[];
  userDetail: IUsers;

  @Output() showView = new EventEmitter<string>();

  confirmPassword: string = "";

  ngOnInit() {
    this.userDetail = {email: "", password: ""};
  }

  getSignUpDetails() {
    this.userLoginDetails.userLoginDetails.push(this.userDetail);
    console.log(this.userLoginDetails.userLoginDetails)
    this.changeView();
  }

  changeView() {
    this.showView.emit('signin');
  }

}
