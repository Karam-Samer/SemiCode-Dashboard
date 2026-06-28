import { Routes } from '@angular/router';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: CreateUserComponent },
    { path: 'dashboard', component: DashboardComponent },
];
