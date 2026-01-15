import { Component } from '@angular/core';
import { ToggleService } from '../../shared/services/toggle.service';
import { DatePipe } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.scss',
  providers: [
    DatePipe
  ]
})
export class AppHeaderComponent {

  constructor(
    private datePipe: DatePipe,
    private authService: AuthService,
    public toggleService: ToggleService,
  ) {
    this.toggleService.isToggled$.subscribe(isToggled => {
      this.isToggled = isToggled;
    });
    this.formattedDate = this.datePipe.transform(this.currentDate, 'dd MMMM yyyy');
  }

  // Toggle Service
  isToggled = false;
  toggle() {
    this.toggleService.toggle();
  }

  // Dark Mode
  toggleTheme() {
    this.toggleService.toggleTheme();
  }

  // Current Date
  currentDate: Date = new Date();
  formattedDate: any;

  public onLogout(event: Event): void {
    event.preventDefault();
    this.authService.logout();
  }
}
