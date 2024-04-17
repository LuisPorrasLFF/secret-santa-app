import { FormControl, Validators, FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { User } from './../../../models/users';
import { UserService } from '../../../services/user.service';
import { forbiddenNameValidator } from '../../../directives/forbidden-name.directive';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatButtonModule, MatInputModule, MatFormFieldModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent implements OnInit {
  @Input() actionName: string = '';
  @Input() user: User | undefined;

  @Output() onSubmitCallback: EventEmitter<User> = new EventEmitter();

  invalidNames : string[] = this.userService.getUsersNames();
  invalidEmails : string[] = this.userService.getUsersEmails();

  userFrom = new FormGroup({
    name: new FormControl('', [Validators.required, forbiddenNameValidator(this.invalidNames)]),
    email: new FormControl('', [Validators.required, Validators.email, forbiddenNameValidator(this.invalidEmails)]),
  })

  get name() {
    return this.userFrom.get("name");
  }

  get email() {
    return this.userFrom.get("email");
  }

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    if (this.user !== undefined) {
      this.userFrom.setValue(this.user);
    }
  }

  onSubmit(): void {
    if(this.userFrom.valid){
      this.onSubmitCallback.emit(this.userFrom.value as User);
    }
  }
}
