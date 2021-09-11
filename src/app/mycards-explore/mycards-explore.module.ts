import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MycardsExplorePageRoutingModule } from './mycards-explore-routing.module';
import { SwiperModule } from 'swiper/angular';

import { MycardsExplorePage } from './mycards-explore.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MycardsExplorePageRoutingModule,
    SwiperModule
  ],
  declarations: [MycardsExplorePage]
})
export class MycardsExplorePageModule {}
