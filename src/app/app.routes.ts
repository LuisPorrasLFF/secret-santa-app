import { Routes } from '@angular/router';
import { UserListComponent } from './user-components/user-list/user-list.component';
import { CreateUserComponent } from './user-components/create-user/create-user.component';
import { EditUserComponent } from './user-components/edit-user/edit-user.component';

export const routes: Routes = [
    { path: '', component: UserListComponent },
    { path: 'create', component: CreateUserComponent },
    { path: 'edit/:userId', component: EditUserComponent }
];
