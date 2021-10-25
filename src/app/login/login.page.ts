import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  LoginInputValidation:FormGroup;
  constructor() { }

  ngOnInit() {
   /* this.LoginInputValidation =new FormGroup({
      Email :new FormControl(null ,[Validators.required,Validators.email]),
      Password: new FormControl(null,[Validators.required,Validators.minLength(8)])
    });*/
  }
  login(){
    
  }
  doRefresh(event){
    console.log('Begin async operation');
    setTimeout(()=>{
      console.log('async operation has ended');
      event.target.complete();
    },2000);
  }
}
