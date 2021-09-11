import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.page.html',
  styleUrls: ['./forgotpass.page.scss'],
})
export class ForgotpassPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  doRefresh(event){
    console.log('Begin async operation');
    setTimeout(()=>{
      console.log('async operation has ended');
      event.target.complete();
    },2000);
  }
}
