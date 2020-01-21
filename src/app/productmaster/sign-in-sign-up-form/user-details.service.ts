import { Injectable } from '@angular/core';
import { IUserDetails } from './UserDetailsInterface'

@Injectable()
export class UserLoginDetailService {
    userLoginDetails: IUserDetails[] = [{   
            email: "a@gmail.com",
            password: "a"
        }
    ];

    getProductDetails(): IUserDetails[] {
        return this.userLoginDetails;
    }
}