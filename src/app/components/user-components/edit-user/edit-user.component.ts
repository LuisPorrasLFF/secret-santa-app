import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User } from './../../../models/users';
import { UserFormComponent } from '../user-form/user-form.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [UserFormComponent],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent implements OnInit {
  readonly actionName : string = "Edit";

  users = this.userService.getUsers();
  user: User | undefined;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const userIdFromRoute = Number(routeParams.get('userId'));
    this.user = this.users.find(user => user.id === userIdFromRoute);
  }

  onSubmit(user: User): void {
    if (user !== undefined) {
      this.user = user;
      this.userService.editUser(this.user);
      this.router.navigate(['']);
    }
  }
}
