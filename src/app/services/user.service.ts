import { Injectable } from '@angular/core';
import { User } from './../models/users';

const usersToken: string = "users";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [];

  addUser(user: User){
    this.refreshUsers();
    user.id = this.users.length;
    this.users.push(user);
    this.saveUsers();
  }

  getUsers(){
    this.refreshUsers();
    return this.users;
  }

  getUsersNames(){
    this.refreshUsers();
    let names : string[] = [];
    this.users.forEach(user => {
      names.push(user.name.toLocaleLowerCase());
    });
    return names;
  }

  getUsersEmails(){
    this.refreshUsers();
    let emails : string[] = [];
    this.users.forEach(user => {
      emails.push(user.email.toLocaleLowerCase());
    });
    return emails;
  }

  editUser(user: User){
    let userIndex = this.users.findIndex(u => u.id == user.id);
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

  clearUsers(){
    localStorage.clear();
    this.refreshUsers();
  }

  private saveUsers(){
    let usersString = JSON.stringify(this.users);
    localStorage.setItem(usersToken, usersString);
  }

  private refreshUsers(){
    let usersString = localStorage.getItem(usersToken);
    if(usersString !== null){
      let users = JSON.parse(usersString);
      this.users = users as User[];
    }
    else{
      this.users = [];
    }
  }
}
