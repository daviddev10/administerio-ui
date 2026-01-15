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
import { InputTextComponent } from './atoms/inputs/input-text.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { InputTextAreaComponent } from './atoms/inputs/input-text-area.component';
import { InputDatePickerComponent } from './atoms/inputs/input-date-picker.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InputRadioComponent } from './atoms/inputs/input-radio.component';
import { MatRadioModule } from '@angular/material/radio';
import { InputSelectComponent } from './atoms/inputs/input-select.component';
import { MatSelectModule } from '@angular/material/select';
import { InputPasswordComponent } from './atoms/inputs/input-password.component';

@NgModule({
  declarations: [
    ToolbarComponent,
    ButtonOptionComponent,
    CardContainerComponent,
    ButtonPrimaryComponent,
    FormContainerComponent,
    ButtonSecondaryComponent,
    InputTextComponent,
    InputTextAreaComponent,
    InputDatePickerComponent,
    InputRadioComponent,
    InputSelectComponent,
    InputPasswordComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatMenuModule,
    MatCardContent,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatRadioModule,
    MatSelectModule,
    MatFormFieldModule,
    FeatherModule.pick(allIcons),
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' } // Calendario en español
  ],
  exports: [
    ToolbarComponent,
    InputTextComponent,
    ButtonOptionComponent,
    InputTextAreaComponent,
    CardContainerComponent,
    ButtonPrimaryComponent,
    InputPasswordComponent,
    FormContainerComponent,
    InputDatePickerComponent,
    MatNativeDateModule,
    InputRadioComponent,
    InputSelectComponent
  ]
})
export class UiModule { }
