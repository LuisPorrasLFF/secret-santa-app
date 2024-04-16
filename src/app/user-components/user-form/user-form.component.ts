import { FormControl, Validators, FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
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

  userFrom = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
  })

  get name() {
    return this.userFrom.get("name");
  }

  get email() {
    return this.userFrom.get("email");
  }

  ngOnInit() {
    if (this.user !== undefined) {
      this.userFrom.setValue(this.user)
    }
  }

  onSubmit(): void {
    if(this.userFrom.valid){
      this.onSubmitCallback.emit(this.userFrom.value as User);
    }
  }
}
