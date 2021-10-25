import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
//import * as Chart from "chart.js";
import {Chart,registerables } from 'chart.js';
import { Customer } from '../Customer';
import { CustomerRegisterComponent } from '../customer-register/customer-register.component';
import { CustomerServiceService } from '../customer-service.service';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.page.html',
  styleUrls: ['./admin-dashboard.page.scss'],
})
export class AdminDashboardPage implements OnInit {

  constructor(private customerService:CustomerServiceService,private modalCtrl:ModalController) { }
  
 /* public customers:Customer[];


  public getCustomers():void{
      this.customerService.getCustomers().subscribe(
          (response:Customer[])=>{
              this.customers=response;
          
      },(error:HttpErrorResponse)=>{
          alert(error.message);
      }
      );
  }*/
  //  private investmentChart:Chart;
  chart:any=[];
  
  ngOnInit() {
    //this.generateCharts();
   // this.getCustomers();4
   Chart.register(...registerables);
this.chart= new Chart('canvas',{
  type:'line',
  data:{
    labels:['saturday','sunday','monday','Tuesday','Wedensday','Thursday','Friday'],
    datasets:[{
      label:'Time spent online on app in minutes',
      data:[1,3,5,10,56,65,35,543,543,543],
      backgroundColor:'red',
      borderColor:'red',
      fill:false
    },
  
  ]
  }
})
this.chart= new Chart('canvas1',{
  type:'pie',
  data:{
    labels:['Male','Female'],
    datasets:[{
      label:'Children gender',
      data:[10,10],
      backgroundColor:['blue','hotpink'],
      hoverOffset:4
      
    },
  
  ]
  }
})

  }

  async addcustomer(){
    const register=await this.modalCtrl.create({
      component:CustomerRegisterComponent
      
    });
     await register.present();
  }
  /*  add_Custor(){
    const register=await this.modalCtrl.create({
        component:CustomerRegisterComponent
        
      });
     // return await register.present();
      }
}*/

  
  
  

}
