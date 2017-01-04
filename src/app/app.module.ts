import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { AppCryptoService } from './../services/app.crypto.service';
import { AppStorageService } from './../services/app.storage.service';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { OrderPage } from '../pages/order/order';
import { OrderFilterPage } from '../pages/order/filter';

import { ContactPage } from '../pages/contact/contact';
import { AboutPage } from '../pages/about/about';
import { TabsPage } from '../pages/tabs/tabs';
import { SlidesPage } from '../pages/slides/slides';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    OrderFilterPage,
    HomePage,
    TabsPage,
    SlidesPage,
    OrderPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    OrderPage,
    OrderFilterPage,
    ContactPage,
    AboutPage,
    TabsPage,
    SlidesPage
    
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}, 
    Storage,
    AppCryptoService,
    AppStorageService
  ]
})
export class AppModule {}
