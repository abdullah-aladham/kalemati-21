import { Component } from '@angular/core';
//import { ToastrService } from 'ngx-toastr';
import { NotificationService } from './notification.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private notifyService:NotificationService) {}
 /* showToastr(){
this.notifyService.showSuccess("data shown successfully","Notification")
  }*/
}
