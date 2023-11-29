import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent {
  isShowInput = false;
  surveyResult = '';
  surveyTitle = 'Khảo sát hệ thống Core Banking T24';

  constructor(private _sanitizer: DomSanitizer) {}

  toggleInput() {
    this.isShowInput = !this.isShowInput;
  }

  rows: string[][] = [];
  headers: string[] = [];

  changeContent() {
    const allRows = this.removeLastNewline(this.surveyResult)
      .split('\n')
      .map((row) => row.split('\t'));
    if (allRows.length > 0) {
      this.headers = allRows[0];
      this.rows = allRows.slice(1);
      console.log(this.rows);
    }
  }

  removeLastNewline(inputString: string): string {
    console.log(inputString);
    if (inputString.endsWith('\n')) {
      return inputString.slice(0, -1);
    }
    return inputString;
  }
}
