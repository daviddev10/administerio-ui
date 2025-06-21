import { Component } from '@angular/core';

@Component({
    selector: 'card-container',
    standalone: false,
    template: `<mat-card class="trinta-card mb-25 bg-white border-none d-block">
                <!-- Header -->
                <mat-card-header>
                    <ng-content></ng-content>
                </mat-card-header>
                <!-- Content -->
                <mat-card-content>
                </mat-card-content>
              </mat-card>`,
    styles: ``
})
export class CardContainerComponent {

}
