import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(http: HttpClient) {
  }

  getLoggedInUser(): User {
    return {
      name: 'John Doe',
      img: 'https://s3.amazonaws.com/uifaces/faces/twitter/fffabs/73.jpg'
    };
  }

}
