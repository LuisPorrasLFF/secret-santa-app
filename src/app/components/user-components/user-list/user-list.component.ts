import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { UserService } from '../../../services/user.service';

import { User } from './../../../models/users';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent{
  displayedColumns: string[] = ['id', 'name', 'email', 'edit', 'delete'];

  users: User[] = this.userService.getUsers();

  deleteUser(user: User): void {
    this.userService.removeUser(user);
  }

  clearUsers(): void {
    this.userService.clearUsers();
    this.users = this.userService.getUsers();
  }

  constructor(
    private userService: UserService
  ) { }
}
