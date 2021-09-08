import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() { }
  public cancel() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }
}
