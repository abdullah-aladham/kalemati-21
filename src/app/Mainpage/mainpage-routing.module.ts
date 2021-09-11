import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketPage } from '../market/market.page';
import { MyCardsPage } from '../mycards/mycards.page';
import { TabsPage } from '../tabs/tabs.page';
import { Mainpage } from './mainpage.page';

const routes: Routes = [
  {
    path: '',
    component: Mainpage,
  },
  {
    path:'market',
    component:MarketPage
  },
  {
    path:'mycards',
    component:MyCardsPage
  },
  {
    path:'tabs',
    
    component:TabsPage,
   
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
