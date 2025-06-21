import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonOptionComponent } from './atoms/buttons/button-option.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardContent, MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { CardContainerComponent } from './atoms/cards/card-container.component';
import { ButtonPrimaryComponent } from './atoms/buttons/button-primary.component';
import { FeathericonsModule } from '../shared/icons/feathericons/feathericons.module';
import { ToolbarComponent } from './molecules/toolbar.component';
import { FormContainerComponent } from './organisms/form-container.component';



@NgModule({
  declarations: [
    ToolbarComponent,
    ButtonOptionComponent,
    CardContainerComponent,
    ButtonPrimaryComponent,
    FormContainerComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatMenuModule,
    MatCardContent,
    MatButtonModule,
    FeathericonsModule
  ],
  exports: [
    ToolbarComponent,
    ButtonOptionComponent,
    CardContainerComponent,
    ButtonPrimaryComponent,
    FormContainerComponent,
  ]
})
export class UiModule { }
