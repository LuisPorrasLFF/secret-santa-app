import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { User } from './../../models/users';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatButtonModule, MatInputModule, MatFormFieldModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent implements OnInit {
  @Input() user: User | undefined;
  @Input() actionName: string = '';

  @Output() onSubmitCallback: EventEmitter<User> = new EventEmitter();

  nameFormControl = new FormControl('', [Validators.required]);
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  ngOnInit() {
    if (this.user !== undefined) {
      this.nameFormControl.setValue(this.user.name);
      this.emailFormControl.setValue(this.user.email);
    }
    else {
      this.user = {
        id: 0,
        name: '',
        email: '',
        restrictions: []
      };
    }
  }

  onSubmit(): void {
    if (this.nameFormControl.valid && this.emailFormControl.valid && this.user !== undefined) {
      this.user.name = this.nameFormControl.value!;
      this.user.email = this.emailFormControl.value!;
      this.onSubmitCallback.emit(this.user);
    }
  }
}
