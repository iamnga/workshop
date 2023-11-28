import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';
@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['../../app/app.component.css'],
})
export class SurveyComponent {
  constructor() {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1000);
  }
}
