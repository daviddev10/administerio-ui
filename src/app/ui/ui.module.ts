import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonOptionComponent } from './atoms/buttons/button-option.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardContent, MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { CardContainerComponent } from './atoms/cards/card-container.component';
import { ButtonPrimaryComponent } from './atoms/buttons/button-primary.component';
import { ToolbarComponent } from './molecules/toolbar.component';
import { FormContainerComponent } from './organisms/form-container.component';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { ButtonSecondaryComponent } from './atoms/buttons/button-secondary.component';



@NgModule({
  declarations: [
    ToolbarComponent,
    ButtonOptionComponent,
    CardContainerComponent,
    ButtonPrimaryComponent,
    FormContainerComponent,
    ButtonSecondaryComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatMenuModule,
    MatCardContent,
    MatButtonModule,
    FeatherModule.pick(allIcons),
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
