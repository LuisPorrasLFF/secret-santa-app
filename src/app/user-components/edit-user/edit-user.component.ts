import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from './../../models/users';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatButtonModule, MatInputModule, MatFormFieldModule],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent implements OnInit {
  users = this.userService.getUsers();
  user: User | undefined;

  nameFormControl = new FormControl('', [Validators.required]);
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const userIdFromRoute = Number(routeParams.get('userId'));
    this.user = this.users.find(user => user.id === userIdFromRoute);
    if(this.user !== undefined){
      this.nameFormControl.setValue(this.user.name);
      this.emailFormControl.setValue(this.user.email);
    }
  }

  onSubmit(): void {
    if (this.nameFormControl.valid && this.emailFormControl.valid && this.user !== undefined) {
      this.user.name = this.nameFormControl.value!;
      this.user.email = this.emailFormControl.value!;
      this.userService.editUser(this.user);
      console.log(this.userService.getUsers());
      this.nameFormControl.reset();
      this.emailFormControl.reset();
    }
  }
}
