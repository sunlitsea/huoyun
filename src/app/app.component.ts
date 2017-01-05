import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Platform, NavController  } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { SlidesPage } from '../pages/slides/slides';
import { TabsPage } from '../pages/tabs/tabs';
import { AppStorageService } from '../services/app.storage.service';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild('nav') nav: NavController;
    rootPage:any;

    constructor(platform: Platform, storage: AppStorageService) {
        this.rootPage = null;
        Promise.all([platform.ready(), storage.get('played')])
            .then((resolve) => {
                // Okay, so the platform is ready and our plugins are available.
                // Here you can do any higher level native things you might need.
                StatusBar.styleDefault();
                Splashscreen.hide();
                
                if(resolve[1] == 'true'){
                    this.nav.setRoot(TabsPage);
                }else{
                    this.nav.setRoot(SlidesPage);
                }
            });
    }
}
