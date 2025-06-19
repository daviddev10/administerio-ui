import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonOptionComponent } from './atoms/buttons/button-option.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardContent, MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { CardContainerComponent } from './atoms/cards/card-container.component';



@NgModule({
  declarations: [
    ButtonOptionComponent,
    CardContainerComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatMenuModule,
    MatCardContent,
    MatButtonModule,
  ],
  exports: [
    ButtonOptionComponent,
    CardContainerComponent,

  ]
})
export class UiModule { }
