import { Component, OnInit } from '@angular/core';
// import { FormControl, Validators,FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.scss'],
})
export class CustomerRegisterComponent implements OnInit {
  // //this.firstname=new FormControl('', Validators.required);

  // firstname=document.getElementById("firstname");
  // lastname=document.getElementById("lastname");
  // Phonenumber=document.getElementById("phone");
  // email=document.getElementById("email");
  //  Form=document.getElementById("form");
  


  constructor() { }

  ngOnInit() {
    
  }


  createCustomer(){
    console.log("it is working");
  }

}
