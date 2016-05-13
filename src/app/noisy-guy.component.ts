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
  fileName: string;

  constructor(http: Http) {
    this.http = http;
    this.params = new URLSearchParams();
  }

  convert() {
    this.params.set('text', this.talkedText);
    this.params.set('speaker', 'show');

    this.http
      .get(this.url, { search: this.params })
      .subscribe (
        res => {
//          var context = new AudioContext();
//          var buffer = (new Uint8Array([].map.call(res.text(), function(c) {
//            return c.charCodeAt(0)
//          }))).buffer;
//          console.log('buffer',buffer);
//          var audioBuffer;
//          context.decodeAudioData(buffer, function (buf) {
//            audioBuffer = buf;
//            var source = context.createBufferSource();
//            console.log(audioBuffer);
//            source.buffer = audioBuffer;
//
//// 再生準備。contextの持っている再生先に接続
//            source.connect(context.destination);
//
//// 再生 (引数はtimeout)
//            source.start(0);
//          });

          //var buffer = new Buffer(res);
          //this.result = res.json();

          this.result = res.text().replace(/"/g, '');
          console.log(this.result);
        },
        error => console.log(error)
      );
  }

  talk() {
    this.fileName = this.result;
  }


}
