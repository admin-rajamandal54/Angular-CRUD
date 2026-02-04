import { Routes } from '@angular/router';
import { Home } from './component/home/home';
import { SellerAuth } from './component/seller-auth/seller-auth';

export const routes: Routes = [
    {path:'', component:Home},
    {path:'seller-auth', component:SellerAuth}
];
