import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
    id: this.users.length,
    name: '',
    email: '',
    restrictions: []
  }

  nameFormControl = new FormControl('', [Validators.required]);
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  userForm = this.formBuilder.group({
    name: '',
    email: ''
  });

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) { }

  onSubmit(): void {
    this.newUser.name = this.nameFormControl.value!;
    this.newUser.email = this.emailFormControl.value!;
    this.userService.addUser(this.newUser);
    console.log(this.userService.getUsers())
    this.userForm.reset();
  }
}
