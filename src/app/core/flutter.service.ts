import { Injectable } from '@angular/core';
declare var flutter: any;
declare var bridgeFlutter: any;
declare var navigator: any;
declare var cordova: any;
@Injectable({
    providedIn: 'root'
})
export class FlutterService {
    isInited = false;
    constructor() {
        let self = this;
        document.addEventListener("deviceready", function () {
            flutter.init(() => {
                self.isInited = true;
                self.defFlutter();
            }, (err) => console.error(err));
        }, false);
    }



    open() {
        flutter.open(function () {
            console.log("打开flutter成功");
        }, function (err) {

        });
    }

    /**
     * 拍一张照片或者选择一张照片，返回照片的base64编码
     */
    takePhoto(sourceType: number = 0): Promise<string> {
        let promise = new Promise<string>((resolve, reject) => {
            navigator.camera.getPicture(function (imageURI) {
                let base64 = "data:image/jpeg;base64," + imageURI;
                resolve(base64);
            }, function (message) {
                reject(message);
            }, {
                quality: 50,
                destinationType: 0,// Camera.DestinationType.DATA_URL,
                mediaType: 0, // Camera.MediaType.PICTURE,
                sourceType: sourceType // Camera.PictureSourceType.SAVEDPHOTOALBUM
            });
        });
        return promise;
    }

    openInappbrowser() {
        cordova.InAppBrowser.open('https://www.baidu.com', '_blank', 'location=yes');
    }


    /**
     * 定义与flutter的桥接
     */
    defFlutter() {
        let self = this;
        bridgeFlutter.takePhoto = function (param, callback) {
            self.takePhoto(param.sourceType).then(base64 => callback({ value: base64 }));
        }
        bridgeFlutter.openInappbrowser = function (param, callback) {
            self.openInappbrowser();
            callback({ result: true });
        }
    }
}
