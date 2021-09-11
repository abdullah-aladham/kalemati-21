import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AddchildComponent } from '../addchild/addchild.component';
import {Platform} from '@ionic/angular';
//declare var $: any;
@Component({
  selector: 'app-mainpage',
  templateUrl: 'mainpage.page.html',
  styleUrls: ['mainpage.page.scss']
})
export class Mainpage {

  constructor(public ModalCtrl: ModalController, public router: Router,public platform:Platform)
   {


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
          console.log(child1);

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
