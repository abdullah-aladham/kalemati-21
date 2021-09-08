import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ProductDetailsComponent } from '../product-details/product-details.component';
@Component({
  selector: 'app-market',
  templateUrl: './market.page.html',
  styleUrls: ['./market.page.scss'],
})
export class MarketPage implements OnInit {

  constructor(public router: Router, public modalCtrl: ModalController) { }

  ngOnInit() {
  }
  public back() {
    this.router.navigateByUrl('tabs/tab1');
  }

  public showdetails() {
    const modal1 = this.modalCtrl.create({
      component: ProductDetailsComponent
    });
    modal1.then(mdl => {
      mdl.present();
    });

  }
  //end of show
}
