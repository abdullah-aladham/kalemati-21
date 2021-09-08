/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { Component, OnInit } from '@angular/core';
//import { LocalNotifications } from 'nativescript-local-notifications';
import { environment } from 'src/environments/environment';

//AngularFireModule.initializeApp(environment.firebaseConfig);

@Component({
  selector: 'app-mycards-explore',
  templateUrl: './mycards-explore.page.html',
  styleUrls: ['./mycards-explore.page.scss'],
})
export class MycardsExplorePage implements OnInit {

  /* const firebase = require('firebase/app');
   require('firebase/<PACKAGE>');*/
  // imagesrc;
  //image;
  //imagecollection: AngularFirestoreCollection;
  //constructor(private afs: AngularFirestore) {
  //this.imagecollection = this.afs.collection('أدوات المطبخ والطعام');
  //}
  //getcollections() {
  // return this.imagecollection.valueChanges();
  //}
  //var ref = database.ref('data');

  /* getPhotoUrl() {
     firebase.storage().ref('/data/').once('value').then(function (data) {
       alert(JSON.stringify(data.val()));
     });*/
  /*firebase.database().ref('/data/').once('value').then(function (data) {
     alert(JSON.stringify(data.val()));
   });*/
  //}
  /*getdata() {
    // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
    firebase.database().ref('/data/').once('value').then(function (data) {
      alert(JSON.stringify(data.val()));
    });
  }*/
  ngOnInit() {
    //AngularFireModule.initializeApp(environment.firebaseConfig);

    //  this.getdata();
    //this.getPhotoUrl();
    // this.getcollections();

  }
}

