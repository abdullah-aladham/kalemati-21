import { AfterContentChecked, Component, OnInit } from '@angular/core';
import SwiperCore from 'swiper';
import { IonicSwiper, ModalController } from '@ionic/angular';
SwiperCore.use([IonicSwiper]);
@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss'],
})
export class CardViewComponent  implements AfterContentChecked{

  constructor(public ModalCtrl:ModalController) { }
  ngAfterContentChecked(): void {
    throw new Error('Method not implemented.');
  }

 

   close() {
    this.ModalCtrl.dismiss({
      dismissed: true
    });
  }
  closeAllowed=true;

  toggleTouch(){
    this.closeAllowed= !this.closeAllowed;
   // this.ModalCtrl.dismiss=this.closeAllowed;
 //   this.swiper.swiperRef.allowTouchMove=this.touchAllowed;
  }
  
}
