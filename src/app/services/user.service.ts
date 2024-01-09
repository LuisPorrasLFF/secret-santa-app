import { Injectable } from '@angular/core';
import { User } from './../models/users';

const usersToken: string = "users";

const TEST_USER_DATA: User[] = [
  {id: 0, name: 'Test 01', email: 'test01@email.com', restrictions: []},
  {id: 1, name: 'Test 02', email: 'test02@email.com', restrictions: []},
  {id: 2, name: 'Test 03', email: 'test03@email.com', restrictions: []}
]

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [];

  addUser(user: User){
    user.id = this.users.length;
    this.users.push(user);
    this.saveUsers();
  }

  getUsers(){
    let usersString = localStorage.getItem(usersToken);
    if(usersString !== null){
      let users = JSON.parse(usersString);
      this.users = users as User[];
    }
    else{
      this.users = TEST_USER_DATA;
    }
    return this.users;
  }

  editUser(user: User){
    let userIndex = this.users.findIndex(u => u.id == user.id);
    console.log(user);
    this.users[userIndex] = user;
    this.saveUsers();
  }

  removeUser(user: User){
    let userIndex = this.users.findIndex(u => u.id == user.id);
    this.users.splice(userIndex, 1);
    for(let i = 0; i < this.users.length; i++){
      this.users[i].id = i;
    }
    this.saveUsers();
  }

  private saveUsers(){
    let usersString = JSON.stringify(this.users);
    localStorage.setItem(usersToken, usersString);
  }
}
