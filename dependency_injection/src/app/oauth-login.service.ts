import { Injectable } from '@angular/core';

@Injectable()
export class OAuthLoginService {

    login(loginData: any) {
        console.log('Executing login via OAuth', loginData);
    }

}
