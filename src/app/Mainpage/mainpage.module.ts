import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Mainpage } from './mainpage.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './mainpage-routing.module';
import { SwiperModule } from 'swiper/angular';
import { PopoverComponent } from '../popover/popover.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    SwiperModule
  ],
  declarations: [Mainpage,PopoverComponent]
})
export class MainpageModule {}
