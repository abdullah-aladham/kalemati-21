import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.scss'],
})
export class CustomerRegisterComponent implements OnInit {
  firstname=document.getElementById("firstname");
  lastname=document.getElementById("lastname");
  Phonenumber=document.getElementById("phone");
  email=document.getElementById("email");
   Form=document.getElementById("form");

  constructor() { }

  ngOnInit() {
    if(this.firstname===null ){
      document.getElementById("fname").innerHTML="Firstname cannot be null";
      return;
    }
    else if(this.lastname===null){
      document.getElementById("lname").innerHTML="Last name cannot be null";
    }
    else if(this.Phonenumber===null ){
      document.getElementById("phoneErr").innerHTML="phone number cannot be null";
    }
    else if(this.email===null ){
      document.getElementById("EmailErr").innerHTML="Email cannot be null";
    }

  }


  createCustomer(){
    console.log("it is working");
  }

}
