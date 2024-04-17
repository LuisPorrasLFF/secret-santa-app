import { Routes } from '@angular/router';
import { UserListComponent } from './components/user-components/user-list/user-list.component';
import { CreateUserComponent } from './components/user-components/create-user/create-user.component';
import { EditUserComponent } from './components/user-components/edit-user/edit-user.component';
import { RestrictionListComponent } from './components/restriction-components/restriction-list/restriction-list.component'
import { ResultComponent } from './components/result-componets/result/result.component'

export const routes: Routes = [
    { path: '', component: UserListComponent },
    { path: 'create', component: CreateUserComponent },
    { path: 'edit/:userId', component: EditUserComponent },
    { path: 'restriction', component: RestrictionListComponent },
    { path: 'result', component: ResultComponent }
];
