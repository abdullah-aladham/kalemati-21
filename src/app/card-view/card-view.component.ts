import { Component, OnInit } from '@angular/core';
import SwiperCore from 'swiper';
import { IonicSwiper, ModalController } from '@ionic/angular';
SwiperCore.use([IonicSwiper]);
@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss'],
})
export class CardViewComponent implements OnInit {

  constructor(public ModalCtrl:ModalController) { }

  ngOnInit() {}

   close() {
    this.ModalCtrl.dismiss({
      dismissed: true
    });

  }

}
