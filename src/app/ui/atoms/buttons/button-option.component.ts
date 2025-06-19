import { Component } from '@angular/core';

@Component({
  selector: 'button-option',
  standalone: false,
  template: `<button mat-button class="btn-option">
               <i class="material-symbols-outlined">refresh</i>
               <!-- <span>hola</span> -->
             </button>`,
  styles: ``,
})
export class ButtonOptionComponent {

}
