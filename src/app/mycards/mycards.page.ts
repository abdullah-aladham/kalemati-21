import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CardViewComponent } from '../card-view/card-view.component';
import { Router } from '@angular/router';

import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-my-cards',
  templateUrl: './mycards.page.html',
  styleUrls: ['./mycards.page.scss'],
})
export class MyCardsPage implements OnInit {
  imagesrc;
  image;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  constructor(public ModalCtrl: ModalController, public router: Router) { }


  //getdata() {
  // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
  /*  firebase.database().ref('/data/').once('value').then(function (data) {
      AngularFireModule.initializeApp(environment.firebaseConfig);
    }
      alert(JSON.stringify(data.val()));
  });*/


  // }
  //}
  ngOnInit() {
    // this.getdata();
  }
  public showcards() {
    this.router.navigateByUrl('mycards-explore');
  }
  back() {
    this.router.navigateByUrl('tabs/tab1');

  }
}
