import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MycardsPageRoutingModule } from './mycards-routing.module';

import { MyCardsPage } from './mycards.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MycardsPageRoutingModule
  ],
  declarations: [MyCardsPage]
})
export class MycardsPageModule {}
