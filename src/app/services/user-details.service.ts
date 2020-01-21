import { Injectable } from '@angular/core';
import { IUsers } from '../models/users-interface'

@Injectable()
export class UserLoginDetailService {
    userLoginDetails: IUsers[] = [{   
            email: "a@gmail.com",
            password: "a"
        }
    ];


    getProductDetails(): IUsers[] {
        return this.userLoginDetails;
    }
}