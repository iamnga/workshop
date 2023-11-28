import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-digital-app',
  templateUrl: './digital-app.component.html',
  styleUrls: ['../../app/app.component.css'],
})
export class DigitalAppComponent {
  question1: string = ''; //Answer: 1A
  question2: string = ''; //Answer: 2A
  question3: string = ''; //Answer: 3A
  isQnADone: boolean = false;
  isLoaded = false;
  constructor(private router: Router) {
    this.isQnADone = this.getCookie('isQnADone') !== '' ? true : false;
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1000);
  }

  validateAnswer() {
    return this.question1 !== '' &&
      this.question2 !== '' &&
      this.question3 !== ''
      ? true
      : false;
  }

  checkAnswer() {
    if (
      this.question1 !== '' &&
      this.question2 !== '' &&
      this.question3 !== ''
    ) {
      this.isQnADone = true;
      this.setCookie('isQnADone', '1', 1);
    } else {
      return;
    }
  }

  setCookie(name: string, value: string, days: number) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = 'expires=' + date.toUTCString();
    document.cookie = name + '=' + value + ';' + expires + ';path=/';
  }

  getCookie(name: string) {
    const cookieName = name + '=';
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i];
      while (cookie.charAt(0) == ' ') {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(cookieName) == 0) {
        return cookie.substring(cookieName.length, cookie.length);
      }
    }
    return '';
  }

  goHome() {
    this.router.navigate(['/agenda']);
  }

  imageLoaded() {
    this.isLoaded = true;
  }
}
