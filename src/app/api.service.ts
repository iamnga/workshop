import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  listSurveyInfo = [];
  constructor(private http: HttpClient) {
    this.getSurveyInfo().subscribe((data: any) => {
      this.listSurveyInfo = data;
      console.log(this.listSurveyInfo);
    });
  }

  getSurveyInfo() {
    return this.http.get(
      'https://65658caeeb8bb4b70ef1c8fb.mockapi.io/api/getSurveyInfo'
    );
  }
}
