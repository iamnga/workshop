import { Component } from '@angular/core';

@Component({
  selector: 'app-stm',
  templateUrl: './stm.component.html',
  styleUrls: ['../../../app/app.component.css'],
})
export class StmComponent {
  isLoaded = false;

  constructor() {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1000);
  }

  imageLoaded() {
    this.isLoaded = true;
  }
}
