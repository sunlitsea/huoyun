import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable()
export class AppCryptoService {
    private readonly key:string = '+angular2+ionic2';
    private readonly iv:string = 'ionic';

    //加密
    private getAesString(data,key,iv){
        var key  = CryptoJS.enc.Hex.parse(key);
        var iv   = CryptoJS.enc.Latin1.parse(iv);
        var encrypted = CryptoJS.AES.encrypt(data,key,
            {
                iv:iv,
                mode:CryptoJS.mode.CBC,
                padding:CryptoJS.pad.Pkcs7
            });
        return encrypted.toString();
    }

    //密文
    public encrypt(text:string):string{ 
        return this.getAesString(text, this.key, this.iv); 
    }

    //解密
    private getDAesString(encrypted,key,iv){
        var key  = CryptoJS.enc.Hex.parse(key);
        var iv   = CryptoJS.enc.Latin1.parse(iv);
        var decrypted = CryptoJS.AES.decrypt(encrypted,key,
                {
                    iv:iv,
                    mode:CryptoJS.mode.CBC,
                    padding:CryptoJS.pad.Pkcs7
                });
        return decrypted.toString(CryptoJS.enc.Utf8);
    }

    //解密
    public decrypt(text:string):string{
        return this.getDAesString(text, this.key, this.iv);
    }
}