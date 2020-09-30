import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

    login(loginData: any) {
        console.log('Executing login with data', loginData);
    }

}
