import {Component, Inject} from '@angular/core';
import {UserService} from '../../services/user-service/user.service';
import { User } from '../../services/user-service/user';


@Component({
  selector: 'ch-user-badge',
  templateUrl: 'user-badge.component.html',
  styleUrls: ['user-badge.component.css'],
})
export class UserBadgeComponent {
  user: User;
  constructor(userService: UserService) {
    this.user = userService.getLoggedInUser();
  }
}
