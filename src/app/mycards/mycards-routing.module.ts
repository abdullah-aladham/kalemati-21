import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyCardsPage } from './mycards.page';

const routes: Routes = [
  {
    path: '',
    component: MyCardsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MycardsPageRoutingModule {}
