import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['../../app/app.component.css'],
})
export class DocumentComponent {
  pdfSrc =
    'https://sacombankvn-my.sharepoint.com/:b:/g/personal/hanhtth15493_sacombank_com/EcBabiqjAQJDr7ui2euNjrkBOAldHTLbYsLLkS6_RnYTaA?e=5JTgmk';
  constructor() {
    console.log(this.pdfSrc);
  }
}
