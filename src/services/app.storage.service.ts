import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AppCryptoService } from './app.crypto.service';

@Injectable()
export class AppStorageService {
    constructor(public storage: Storage, public service: AppCryptoService){
    }

    public set(key:string, value:any):Promise<any>{
        let encryptText = this.service.encrypt(value.toString());
        return this.storage.set(key, encryptText);
    }

    public get(key:string):Promise<any>{
        return new Promise((resolve, reject) => {
            this.storage.get(key)
                .then(value => {
                        if(value != null){
                            resolve(this.service.decrypt(value))
                        }
                        resolve("");
                    })
                .catch(error => reject(error));
        });
    }
}