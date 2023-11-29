import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showScrollButton: boolean = false;
  showFooter = true;

  @ViewChild('scrollToTopButton') scrollToTopButton: ElementRef;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.pageYOffset > 100) {
      this.showScrollButton = true;
    } else {
      this.showScrollButton = false;
    }
  }

  @HostListener('dblclick', ['$event'])
  onDoubleClick(event: MouseEvent): void {
    event.preventDefault();
  }

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        )
      )
      .subscribe((event: NavigationEnd) => {
        // Kiểm tra URL hiện tại và quyết định có hiển thị footer không
        this.showFooter = event.urlAfterRedirects !== '/survey/result' && event.urlAfterRedirects !== '/digital-app/omnichannel';
      });
  }

  scrollToTop(isDelay: boolean = false) {
    if (isDelay) {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 1000);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
