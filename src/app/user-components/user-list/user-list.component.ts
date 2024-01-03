import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { UserService } from '../../services/user.service';

import { User } from './../../models/users';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatTableModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent{
  displayedColumns: string[] = ['id', 'name', 'email', 'edit', 'delete'];

  users: User[] = this.userService.getUsers();

  deleteUser(user: User): void {
    this.userService.removeUser(user);
    console.log(this.users);
  }

  constructor(
    private userService: UserService
  ) { }
}
