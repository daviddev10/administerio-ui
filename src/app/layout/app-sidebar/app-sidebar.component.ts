import { Component } from '@angular/core';
import { ToggleService } from '../../shared/services/toggle.service';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './app-sidebar.component.html',
  styleUrl: './app-sidebar.component.scss'
})
export class AppSidebarComponent {

  constructor(
    private toggleService: ToggleService
  ) {
    this.toggleService.isToggled$.subscribe(isToggled => {
      this.isToggled = isToggled;
    });
  }

  // Toggle Service
  isToggled = false;
  toggle() {
    this.toggleService.toggle();
  }

  // Mat Expansion
  panelOpenState = false;
}
