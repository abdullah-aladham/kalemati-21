import { AfterContentChecked, Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AddchildComponent } from '../addchild/addchild.component';
import {Platform} from '@ionic/angular';
import { ToastController } from '@ionic/angular';
//import { SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
//import Swiper, { SwiperOptions } from 'swiper';
import swiperCore,{Pagination} from 'swiper/core';
import Swiper, { SwiperOptions } from 'swiper';


swiperCore.use([Pagination]);

//import {SimpleNotificationsModule} from 'angular2-notification';
//declare var $: any;
@Component({
  selector: 'app-mainpage',
  templateUrl: 'mainpage.page.html',
  styleUrls: ['mainpage.page.scss'],
  encapsulation:ViewEncapsulation.None

})
export class Mainpage implements AfterContentChecked {

  constructor(public ModalCtrl: ModalController, public router: Router,public platform:Platform,public toastController:ToastController)
   {


   }
   config:SwiperOptions ={
    slidesPerView:1,
    spaceBetween:30,
    pagination:true,
  };
@ViewChild('swiper') swiper:SwiperComponent;
ngAfterContentChecked(){
  if(this.swiper){
    this.swiper.updateSwiper({});
  }
}
  
  name: string;
  age: number;
  gender: any;
  children = [{}];
  public showmodal() {
    const modal1 = this.ModalCtrl.create({
      component: AddchildComponent
    });
    modal1.then(mdl => {
      mdl.present();
      modal1.then(md => md.onDidDismiss().then((data: any) => {
        if (data) {
          const child1 = data.data.obj;
          this.children.push(child1);
        

        }
      }));
    }
    );
  }

  public cancel() {
    this.ModalCtrl.dismiss({
      dismissed: true
    });

  }
  public cards() {
    this.router.navigateByUrl('mycards');
  }
  public market() {
    this.router.navigateByUrl('market');
  }
  ngOnInit(){
}
doRefresh(event){
  console.log('Begin async operation');
  setTimeout(()=>{
    console.log('async operation has ended');
    event.target.complete();
  },2000);
}


}
