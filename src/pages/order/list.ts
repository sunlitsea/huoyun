import { Component } from '@angular/core';
import { App, NavController, PopoverController } from 'ionic-angular';

import { OrderFilterPage } from './filter';
import { OrderDetailPage } from './detail';

@Component({
    selector:'page-order',
    templateUrl: 'list.html'
})
export class OrderListPage {
    orderType:string;

    constructor(public appCtrl: App, public navCtrl: NavController, public popoverCtrl: PopoverController) {
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

    goDetail(id:number){
        // this.navCtrl.push(OrderDetailPage, {id:id});
        this.appCtrl.getRootNav().push(OrderDetailPage, {id:id});
    }
}
