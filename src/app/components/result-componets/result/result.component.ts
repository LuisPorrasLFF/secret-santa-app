import { Component, OnInit} from '@angular/core';
import { UserService } from '../../../services/user.service';

import { User } from './../../../models/users';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [],
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent implements OnInit {
  users: User[] = this.userService.getUsers();

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    if(this.users.length > 0){
      let shuffledUsers = this.shuffle(this.users);
      let secretSantas : [User, User][] = [];
      for(let userIndex = 0; userIndex < this.users.length; userIndex++){
        let secretFound = false;
        let secretIndex = 0;
        while(!secretFound && secretIndex < shuffledUsers.length){
          if(this.users[userIndex].id !== shuffledUsers[secretIndex].id 
            && this.users[userIndex].restrictions.findIndex(i => i === shuffledUsers[secretIndex].id) === -1){
            secretSantas.push([this.users[userIndex], shuffledUsers[secretIndex]]);
            shuffledUsers.splice(secretIndex, 1);
            secretFound = true;
          }
          else{
            secretIndex++;
          }
        }
      }
      console.log(secretSantas);
    }
  }

  private shuffle(users: User[]) : User[] {
    let result : User[] = [...users];
    let m = result.length;
    let t : User;
    let i = 0;

    while(m){
      i = Math.floor(Math.random()*m--);
      t = result[m];
      result[m] = result[i];
      result[i] = t; 
    }

    return result;
  }
}
