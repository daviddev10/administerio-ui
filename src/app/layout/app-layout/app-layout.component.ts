import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { NavigationCancel, NavigationEnd, Router } from '@angular/router';
import { ToggleService } from '../../shared/services/toggle.service';
import { isPlatformBrowser, Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-app-layout',
  standalone: false,
  templateUrl: './app-layout.component.html',
  styleUrl: './app-layout.component.scss',
  providers: [
    Location, {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ]
})
export class AppLayoutComponent {

  title = 'Trinta -  Angular 19 Material Design Admin Dashboard Template';
  routerSubscription: any;
  location: any;

  constructor(
    public router: Router,
    public toggleService: ToggleService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.toggleService.isToggled$.subscribe(isToggled => {
      this.isToggled = isToggled;
    });
  }

  // Toggle Service
  isToggled = false;

  // Dark Mode
  toggleTheme() {
    this.toggleService.toggleTheme();
  }

  // Settings Button Toggle
  toggle() {
    this.toggleService.toggle();
  }

  // ngOnInit
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.recallJsFuntions();
    }
  }

  // recallJsFuntions
  recallJsFuntions() {
    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd || event instanceof NavigationCancel))
      .subscribe(event => {
        this.location = this.router.url;
        if (!(event instanceof NavigationEnd)) {
          return;
        }
        this.scrollToTop();
      });
  }
  scrollToTop() {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo(0, 0);
    }
  }
}
