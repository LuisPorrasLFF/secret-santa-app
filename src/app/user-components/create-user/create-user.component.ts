import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from './../../models/users';
import { UserFormComponent } from '../user-form/user-form.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [UserFormComponent],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {

  readonly actionName : string = "Add";

  users = this.userService.getUsers();

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  onSubmit(user: User): void {
    if(user !== undefined){
      this.userService.addUser(user);
      this.router.navigate([''])
    }
  }
}
