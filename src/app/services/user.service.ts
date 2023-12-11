import { Injectable } from '@angular/core';
import { User } from './../models/users';

const TEST_USER_DATA: User[] = [
  {id: 1, name: 'Test 01', email: 'test01@email.com', restrictions: []},
  {id: 2, name: 'Test 02', email: 'test02@email.com', restrictions: []},
  {id: 3, name: 'Test 03', email: 'test03@email.com', restrictions: []}
]

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = TEST_USER_DATA;

  addUser(user: User){
    this.users.push(user);
  }

  getUsers(){
    return this.users;
  }

  editUser(user: User){
    let userIndex = this.users.findIndex(u => u.id == user.id);
    this.users[userIndex] = user;
  }

  removeUser(user: User){
    let userIndex = this.users.findIndex(u => u.id == user.id);
    this.users.splice(userIndex);
  }
}
