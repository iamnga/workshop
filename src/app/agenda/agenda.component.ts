import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['../../app/app.component.css'],
})
export class AgendaComponent implements OnInit {
  isLoaded = false;
  constructor(private route: ActivatedRoute, private router: Router) {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1000);
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      let surveyId = params['surveyId'];
      if (surveyId) {
        this.router.navigate(['/survey/' + surveyId]);
      }
    });
  }

  imageLoaded() {
    this.isLoaded = true;
  }
}
