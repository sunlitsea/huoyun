import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { OrderFilterPage } from './filter';

@Component({
    selector:'page-order-detail',
    templateUrl: 'detail.html'
})
export class OrderDetailPage {

    constructor(public navCtrl: NavController) {
    }
}
