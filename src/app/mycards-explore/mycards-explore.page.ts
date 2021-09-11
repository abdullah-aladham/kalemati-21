import { AfterContentChecked, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ModalController } from '@ionic/angular';
import Swiper, { SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import { CardViewComponent } from '../card-view/card-view.component';
import swiperCore,{Pagination} from 'swiper/core';
swiperCore.use([Pagination]);
@Component({
  selector: 'app-mycards-explore',
  templateUrl: './mycards-explore.page.html',
  styleUrls: ['./mycards-explore.page.scss'],
encapsulation:ViewEncapsulation.None
})
export class MycardsExplorePage implements AfterContentChecked{

  constructor( public ModalCtrl:ModalController) { }
  config:SwiperOptions ={
    slidesPerView:2,
    spaceBetween:50,
    pagination:true,
  };
@ViewChild('swiper') swiper:SwiperComponent;
  ngAfterContentChecked(){
    if(this.swiper){
      this.swiper.updateSwiper({});
    }
  }
  /*ngOnInit() {
  }*/
cardview(){
  const modal1 = this.ModalCtrl.create({
    component: CardViewComponent
  });
  modal1.then(mdl => {
    mdl.present();
    modal1.then(md => md.onDidDismiss().then((data: any) => {
     
    }));
  }
  );
}
touchAllowed=false;
next(){
  this.swiper.swiperRef.slideNext(500);
}
prev(){
  this.swiper.swiperRef.slidePrev(500);
}
toggleTouch(){
  this.touchAllowed= !this.touchAllowed;
  this.swiper.swiperRef.allowTouchMove=this.touchAllowed;
}
}
