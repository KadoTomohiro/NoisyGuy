import { Component } from '@angular/core';
import {Http, RequestOptionsArgs, HTTP_PROVIDERS} from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'noisy-guy-app',
  viewProviders: [HTTP_PROVIDERS],
  templateUrl: 'noisy-guy.component.html',
  styleUrls: ['noisy-guy.component.css']
})
export class NoisyGuyAppComponent {
  title = 'noisy-guy works!';

  http: Http;
  result;
  talkedText: string;

  constructor(http: Http) {
    this.http = http;
  }

  talk() {

    var body = "username=urcoqo00kebdpb4p&
                password=&
                text=${this.talkedText}&
                speaker=show&
                format=wav&
                emotion=happiness&
                emotion_level=2&
                pitch=100&
                speed=100&
                volume=100";

    this.http.post('https://api.voicetext.jp/v1/tts', body)
      .subscribe(
        res => {
          console.log(res);
          this.result = res;
        }
      );
  }


}
