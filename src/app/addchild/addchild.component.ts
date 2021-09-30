/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/member-ordering */
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
//import { AngularFireAuth } from '@angular/fire/auth';
import { ModalController } from '@ionic/angular';
import { child } from '../child';
import { ChildService } from '../child.service';

@Component({
  selector: 'app-addchild',
  templateUrl: './addchild.component.html',
  styleUrls: ['./addchild.component.scss'],
})
export class AddchildComponent implements OnInit {
  ChildService: any;
//[x: string]: any;
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
  addchild() :void {
this.ChildService.addChild().subscribe(
  (response:child)=>{},
  (error:HttpErrorResponse)=>{}
  );
  }
   /*
    let child = { name: this.name, gender: this.gender, age:this.age };//these elements are connected with above inputs but the above ones are not connected with ngmodels 
    if(child.gender==='female'){
      
    }
    this.modalCtrl.dismiss({ child });
    
*/
}




