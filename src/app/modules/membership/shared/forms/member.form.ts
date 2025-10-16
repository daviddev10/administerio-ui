import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { EMemberGender } from "../enums/membership.enum";

export class MemberForm {
    public form!: FormGroup;

    constructor(
        private fb: FormBuilder
    ) {
        this.buildForm();
    }

    private buildForm(): void {
        this.form = this.fb.group({
            MemberName: [null, [Validators.required]],
            BirthDate: [null, [Validators.required]],
            CI: null,
            Gender: EMemberGender.Masculino,
            CivilStatus: [null, [Validators.required]],
            CurrentAddress: [null, [Validators.required]],
            PhoneNumber: [null, [Validators.required]],
            Email: null,
            Ocuppation: null,
            IsBaptized: false,
            Observation: null,
        });
    }

    get CI() { return this.form.get('CI') as FormControl<string>; }
    // get Email() { return this.form.get('Email') as FormControl<string>; }
    get Gender() { return this.form.get('Gender') as FormControl<string>; }
    get BirthDate() { return this.form.get('BirthDate') as FormControl<string>; }
    // get Ocuppation() { return this.form.get('Ocuppation') as FormControl<string>; }
    // get IsBaptized() { return this.form.get('IsBaptized') as FormControl<string>; }
    get MemberName() { return this.form.get('MemberName') as FormControl<string>; }
    get PhoneNumber() { return this.form.get('PhoneNumber') as FormControl<string>; }
    get CivilStatus() { return this.form.get('CivilStatus') as FormControl<string>; }
    // get Observation() { return this.form.get('Observation') as FormControl<string>; }
    get CurrentAddress() { return this.form.get('CurrentAddress') as FormControl<string>; }
}