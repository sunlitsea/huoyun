import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { OrderPage } from '../order/order';
import { ContactPage } from '../contact/contact';
import { AboutPage } from '../about/about';

@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    tab1Root: any = HomePage;
    tab2Root: any = OrderPage;
    tab3Root: any = ContactPage;
    tab4Root: any = AboutPage;

    constructor() {

    }
}
