import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { LogoutPage } from '../logout/logout.page';
import { Mainpage } from '../Mainpage/mainpage.page';

import { LoginPage } from './login.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  },
  {
    path:'tabs/tab1',
    component:Mainpage
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
