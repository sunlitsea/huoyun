import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { AppCryptoService } from './../services/app.crypto.service';
import { AppStorageService } from './../services/app.storage.service';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { OrderRootPage } from '../pages/order/root';
import { OrderListPage } from '../pages/order/list';
import { OrderFilterPage } from '../pages/order/filter';
import { OrderDetailPage } from '../pages/order/detail';

import { ContactPage } from '../pages/contact/contact';
import { AboutPage } from '../pages/about/about';
import { TabsPage } from '../pages/tabs/tabs';
import { SlidesPage } from '../pages/slides/slides';

@NgModule({
  declarations: [
    MyApp,

    SlidesPage,
    TabsPage,

    HomePage,

    OrderRootPage,
    OrderListPage,
    OrderFilterPage,
    OrderDetailPage,

    ContactPage,

    AboutPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

    SlidesPage,
    TabsPage,

    HomePage,

    OrderRootPage,
    OrderListPage,
    OrderFilterPage,
    OrderDetailPage,

    ContactPage,

    AboutPage,
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}, 
    Storage,
    AppCryptoService,
    AppStorageService
  ]
})
export class AppModule {}
