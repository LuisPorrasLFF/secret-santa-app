import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { UserService } from '../../../services/user.service';

import { User } from './../../../models/users';

@Component({
  selector: 'app-restriction-list',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './restriction-list.component.html',
  styleUrl: './restriction-list.component.css'
})
export class RestrictionListComponent {
  users: User[] = this.userService.getUsers();

  constructor(
    private userService: UserService
  ) { }
}
