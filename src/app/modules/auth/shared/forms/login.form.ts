import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

export class LoginForm {

    public form: FormGroup<ILoginForm>;

    constructor(
        private fb: FormBuilder
    ) {
        this.buildForm();
    }

    private buildForm(): void {
        this.form = this.fb.group<ILoginForm>({
            UserName: this.fb.control(null),
            Email: this.fb.control(null, [Validators.required, Validators.email]),
            Password: this.fb.control(null, [Validators.required]),
        });
    }

    get controls() { return this.form.controls; }
}

interface ILoginForm {
    Email: FormControl<string>;
    Password: FormControl<string>;
    UserName: FormControl<string>;
}