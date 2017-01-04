import { Component, ViewChild } from '@angular/core';
import { ViewController, AlertController } from 'ionic-angular';

@Component({
    selector:'page-order-filter',
    templateUrl: 'filter.html'
})
export class OrderFilterPage {
    nameText:string;
    codeText:string;
    orderStartTime:string;
    orderEndTime:string;
    whereType1:boolean;
    whereType2:boolean;
    whereType3:boolean;
    whereType4:boolean;
    orderBy:string;


    constructor(public viewCtrl: ViewController, public alertCtrl: AlertController) {
        this.orderBy = 'orderTimeDesc';
        this.whereType1 = true;
        this.whereType2 = true;
        this.whereType3 = true;
        this.whereType4 = true;
    }

    whereTypeChange(toggleId:number):void{
        if(!this.whereType1 && !this.whereType2 && !this.whereType3 && !this.whereType4){
            this.showWhereTypeAlert()
            .then(()=>{
                switch(toggleId){
                    case 1:
                        this.whereType1 = true;
                        break;
                    case 2:
                        this.whereType2 = true;
                        break;
                    case 3:
                        this.whereType3 = true;
                        break;
                    case 4:
                        this.whereType4 = true;
                        break;
                }
            });
        }
    }

    showWhereTypeAlert() {
        let alert = this.alertCtrl.create({
        title: '订单状态',
        subTitle: '您必须选择至少一个查询状态！',
        buttons: ['OK']
        });
        return alert.present();
    }

    close() {
        this.viewCtrl.dismiss();
    }
}