var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var NoisyGuyAppComponent = (function () {
    function NoisyGuyAppComponent(http) {
        this.title = 'noisy-guy works!';
        this.url = 'http://localhost:8000/api/sed/';
        this.talkedText = 'こんにちわ';
        this.http = http;
        this.params = new http_1.URLSearchParams();
        //this.params.set('format', 'json');
        //this.params.set('callback', 'JSONP_CALLBACK');
        //this.params.set('format', 'wav');
        //this.params.set('emotion', 'happiness');
        //this.params.set('emotion_level', '2');
        //this.params.set('pitch', '100');
        //this.params.set('speed', '100');
        //this.params.set('volume', '100');
    }
    NoisyGuyAppComponent.prototype.talk = function () {
        var _this = this;
        this.params.set('text', this.talkedText);
        this.params.set('speaker', 'show');
        this.http
            .get(this.url, { search: this.params })
            .subscribe(function (res) {
            //          var context = new AudioContext();
            //          var buffer = new Uint16Array(res.text());
            //          var audioBuffer;
            //          context.decodeAudioData(res.text(), function (buf) {
            //            audioBuffer = buf;
            //          });
            //          var source = context.createBufferSource();
            //          source.buffer = audioBuffer;
            //
            //// 再生準備。contextの持っている再生先に接続
            //          source.connect(context.destination);
            //
            //// 再生 (引数はtimeout)
            //          source.noteOn(0);
            //          //var buffer = new Buffer(res);
            _this.result = res.text();
            //          this.result = res.text().replace(/"/g, '');
            //          console.log(this.result);
        }, function (error) { return console.log(error); });
        //var body = "username=urcoqo00kebdpb4p&
        //            password=&
        //            text=${this.talkedText}&
        //            speaker=show&
        //            format=wav&
        //            emotion=happiness&
        //            emotion_level=2&
        //            pitch=100&
        //            speed=100&
        //            volume=100";
    };
    NoisyGuyAppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'noisy-guy-app',
            templateUrl: 'noisy-guy.component.html',
            styleUrls: ['noisy-guy.component.css'],
            providers: [http_1.HTTP_PROVIDERS]
        })
    ], NoisyGuyAppComponent);
    return NoisyGuyAppComponent;
})();
exports.NoisyGuyAppComponent = NoisyGuyAppComponent;
//# sourceMappingURL=noisy-guy.component.js.map