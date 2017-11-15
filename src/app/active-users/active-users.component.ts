import { Component, OnInit, ViewEncapsulation, Input, EventEmitter, Output } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ActiveUsersComponent implements OnInit {
  @Input() users: string[] = [];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.activeUsers;
  }
  onSetToInactive(id: number) {
    this.userService.onSetToInactive(id);
  }

}
