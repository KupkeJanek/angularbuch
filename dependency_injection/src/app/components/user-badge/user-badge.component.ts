import {Component, Inject} from '@angular/core';
import {UserService} from '../../services/user-service/user.service';


@Component({
  selector: 'ch-user-badge',
  templateUrl: 'user-badge.component.html',
  styleUrls: ['user-badge.component.css'],
})
export class UserBadgeComponent {
  user: any;
  constructor(userService: UserService) {
    this.user = userService.getLoggedInUser();
  }
}
