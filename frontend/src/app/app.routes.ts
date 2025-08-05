import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Home } from './pages/home/home';
import { Admin } from './pages/admin/admin';
import {Dashboard} from './pages/dashboard/dashboard';
export const appRoutes: Routes=[
    {path:'',component:Home},
    {path:'login',component:Login},
    {path:'register',component:Register},
    {path:'admin',component:Admin},
    {path:'dashboard',component:Dashboard},
];
