import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

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
