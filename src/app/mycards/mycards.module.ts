import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MycardsPageRoutingModule } from './mycards-routing.module';
import { SwiperModule } from 'swiper/angular';
import { MyCardsPage } from './mycards.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MycardsPageRoutingModule,
    SwiperModule
  ],
  declarations: [MyCardsPage]
})
export class MycardsPageModule {}
