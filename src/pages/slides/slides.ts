import { Component, ViewChild } from '@angular/core';
import { Slides, NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

import { AppStorageService } from '../../services/app.storage.service';

@Component({
    templateUrl: 'slides.html'
})
export class SlidesPage {
    @ViewChild('slider') sliders: Slides;

    constructor(public navCtrl: NavController, public storage: AppStorageService) {
    }

    slideNext(){
        if(this.sliders.isEnd()){
            this.storage.set('played', true)
                .then(()=> this.navCtrl.setRoot(TabsPage));
        }else{
            this.sliders.slideNext();
        }
        event.preventDefault();
    }
}
