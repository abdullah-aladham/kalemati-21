import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Mainpage } from './mainpage.page';

const routes: Routes = [
  {
    path: '',
    component: Mainpage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
