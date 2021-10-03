import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
//import * as Chart from "chart.js";
import {Chart} from'chart.js';
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
  ngOnInit() {
    //this.generateCharts();
   // this.getCustomers();
  }

  
    add_Custoemr(){
    const register=await this.modalCtrl.create({
        component:CustomerRegisterComponent
        
      });
     // return await register.present();
      }
}

  
  
  
  /*async generateCharts(){
  
    var ctx = document.getElementById('investment-chart');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    
    }*/
  
}