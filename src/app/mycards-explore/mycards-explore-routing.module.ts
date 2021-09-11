import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MycardsExplorePage } from './mycards-explore.page';

const routes: Routes = [
  {
    path: '',
    component: MycardsExplorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MycardsExplorePageRoutingModule {}
