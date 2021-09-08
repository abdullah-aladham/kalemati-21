/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
//import { AngularFireAuth } from '@angular/fire/auth';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-addchild',
  templateUrl: './addchild.component.html',
  styleUrls: ['./addchild.component.scss'],
})
export class AddchildComponent implements OnInit {
  // modalCtrl: any;

  constructor(private modalCtrl: ModalController) {

  }

  public cancel() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }
  ngOnInit() { }
  name: string;
  gender: any;
  age: number;
  children = [{
    name: '',
    gender: '',
    age: ''
  },];
  addchild() {
    if (this.name == null || this.age == null || this.age == null) {
      document.getElementById('error').innerHTML = 'invaled credintials';

      return;
    }



    // alert('jwjhegwge');
    //debugger;
    /*const child = { name: this.name, gender: this.gender, age: this.age };//these elements are connected with above inputs but the above ones are not connected with ngmodels
    this.modalCtrl.dismiss(child);
    console.log(child);*/
    // debugger;

    //   try {
    //kind of a hack
    //const res = await this.afAuth.
    //alert('i am done');
    //  }
    //catch (err) {
    //console.dir(err);
    //if (err.code === "auth/user-not-found") {
    //  console.log('user not found');
    // }
    // }

  }

}



