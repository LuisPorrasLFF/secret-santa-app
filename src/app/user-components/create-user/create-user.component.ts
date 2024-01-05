import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from './../../models/users';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatButtonModule, MatInputModule, MatFormFieldModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {

  users = this.userService.getUsers();

  newUser: User = {
    id: 0,
    name: '',
    email: '',
    restrictions: []
  }

  nameFormControl = new FormControl('', [Validators.required]);
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  constructor(
    private userService: UserService
  ) { }

  onSubmit(): void {
    if (this.nameFormControl.valid && this.emailFormControl.valid) {
      this.newUser.name = this.nameFormControl.value!;
      this.newUser.email = this.emailFormControl.value!;
      this.userService.addUser(this.newUser);
      console.log(this.userService.getUsers());
      this.nameFormControl.reset();
      this.emailFormControl.reset();
    }
  }
}
