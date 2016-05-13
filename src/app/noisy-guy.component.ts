import { Component } from '@angular/core';
import {Http, RequestOptionsArgs, URLSearchParams, HTTP_PROVIDERS} from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'noisy-guy-app',
  templateUrl: 'noisy-guy.component.html',
  styleUrls: ['noisy-guy.component.css'],
  providers: [HTTP_PROVIDERS]
})
export class NoisyGuyAppComponent {
  title = 'noisy-guy works!';

  http: Http;
  params: URLSearchParams;
  private url: string = 'http://localhost:8000/api/sed/';
  result;
  talkedText: string = 'こんにちわ';

  constructor(http: Http) {
    this.http = http;
    this.params = new URLSearchParams();
    //this.params.set('format', 'json');
    //this.params.set('callback', 'JSONP_CALLBACK');

    //this.params.set('format', 'wav');
    //this.params.set('emotion', 'happiness');
    //this.params.set('emotion_level', '2');
    //this.params.set('pitch', '100');
    //this.params.set('speed', '100');
    //this.params.set('volume', '100');
  }

  talk() {
    this.params.set('text', this.talkedText);
    this.params.set('speaker', 'show');

    this.http
      .get(this.url, { search: this.params })
      .subscribe (
        res => {
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
          this.result = res.text();
//          this.result = res.text().replace(/"/g, '');
//          console.log(this.result);
        },
        error => console.log(error)
      );



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
  }


}
