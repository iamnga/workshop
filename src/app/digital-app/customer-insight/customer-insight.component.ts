import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-insight',
  templateUrl: './customer-insight.component.html',
  styleUrls: ['../../../app/app.component.css'],
})
export class CustomerInsightComponent {
  constructor() {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1000);
  }
}
