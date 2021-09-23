import { Injectable } from '@angular/core';
//import { Toast, ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }
 /* showSuccess(message,title){
    this.toastr.success(message,title);
  }
  ShowSuccessWithTimeout(message,title,timespan){
    this.toastr.success(message,title,{
      timeOut:timespan
    });
  }
  showHTMLMesssage(message,title){
    this.toastr.success(message,title,{
      enableHtml:true
    });
  }
  showWarning(message,title){
    this.toastr.warning(message,title);
  }
  showInfo(message,title){
    this.toastr.info(message,title);
  }
  ShowError(message,title){
    this.toastr.error(message,title);
  }*/
}
