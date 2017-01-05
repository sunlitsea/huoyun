import { Component, ViewChild } from '@angular/core';
import { NavController  } from 'ionic-angular';
import { OrderListPage } from './list';

@Component({
    templateUrl: 'root.html'
})
export class OrderRootPage {
    @ViewChild('nav') nav: NavController;
    rootPage:any;

    constructor() {
        this.rootPage = OrderListPage;
    }
}
