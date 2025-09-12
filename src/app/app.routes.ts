import { Routes } from '@angular/router';
import { loginGuard } from './router-gaurds/login-guard';

export const routes: Routes = [
    {path:"login",loadComponent() {
        return import('./login/login').then(m => m.Login);
      }},
    {path:"booking",loadComponent() {
        return import('./booking/booking/booking').then(m => m.Booking,);    
    },canActivate:[loginGuard]},
    {path:"",redirectTo:"login",pathMatch:"full"},
    {path:"**",redirectTo:"login"}

];
