import { Injectable } from '@angular/core';
declare var flutter: any;
declare var bridgeFlutter: any;
@Injectable({
    providedIn: 'root'
})
export class FlutterService {
    isInited = false;
    constructor() {
        let self = this;
        alert("flutterSevice");
        document.addEventListener("deviceready", function () {
            flutter.init(() => {
                self.isInited = true;
                self.defFlutter();
            }, (err) => console.error(err));
        }, false);
    }

    defFlutter() {
        alert("defFlutter");
        bridgeFlutter.getDate = function (jsonObj, callback) {
            var format = jsonObj.format;
            callback({ date: "日期格式是：" + format });
            alert("日期格式是：" + format)
        }
    }

    open() {
        flutter.open(function () {
            console.log("打开flutter成功");
        }, function (err) {

        })
    }
}
