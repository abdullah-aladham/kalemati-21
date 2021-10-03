import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Mainpage } from '../Mainpage/mainpage.page';

import { AdminDashboardPage } from './admin-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: AdminDashboardPage
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
export class AdminDashboardPageRoutingModule {}
