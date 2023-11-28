import { Component } from '@angular/core';

@Component({
  selector: 'app-omnichannel',
  templateUrl: './omnichannel.component.html',
  styleUrls: ['../../../app/app.component.css'],
})
export class OmnichannelComponent {
  constructor() {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1000);
  }
}
