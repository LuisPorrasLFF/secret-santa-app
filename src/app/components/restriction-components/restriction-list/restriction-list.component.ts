import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { UserService } from '../../../services/user.service';

import { User } from './../../../models/users';

@Component({
  selector: 'app-restriction-list',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatSelectModule],
  templateUrl: './restriction-list.component.html',
  styleUrl: './restriction-list.component.css'
})
export class RestrictionListComponent implements OnInit {
  users: User[] = this.userService.getUsers();

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    if(this.users.length > 0){
      //Reset restrictions
      this.userService.clearRestrictions();
      this.users = this.userService.getUsers();
    }
  }

  onSelect(user: User, option: User): void {
    //Update restrictions
    if(user.restrictions === undefined){
      user.restrictions = [];
    }
    let restrictionIndex = user.restrictions.indexOf(option.id);
    if(restrictionIndex == -1){
      user.restrictions.push(option.id);
    }
    else{
      user.restrictions.splice(restrictionIndex, 1);
    }
    this.userService.editUser(user);
    this.users = this.userService.getUsers();
  }
}
