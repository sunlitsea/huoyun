import { Component, ViewChild } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';

import { OrderFilterPage } from './filter';

@Component({
    selector:'page-order',
    templateUrl: 'order.html'
})
export class OrderPage {
    orderType:string;

    constructor(public navCtrl: NavController, public popoverCtrl: PopoverController) {
        this.orderType = 'export';
    }

    presentPopover(event) {
        let popover = this.popoverCtrl.create(OrderFilterPage);
        popover.present({
            ev: event
        });
    }

    doRefresh(refresher) {
        setTimeout(() => {
            refresher.complete();
        }, 2000);
    }

    doInfinite(infiniteScroll) {
        setTimeout(() => {
            infiniteScroll.complete();
        }, 2000);
    }
}
