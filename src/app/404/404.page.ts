import { Component } from '@angular/core';

@Component({
  selector: 'app-404',
  templateUrl: '404.page.html',
  styleUrls: ['404.page.scss']
})
export class Tab2Page {

  constructor() {}
  doRefresh(event){
    console.log('Begin async operation');
    setTimeout(()=>{
      console.log('async operation has ended');
      event.target.complete();
    },2000);
  }
}
