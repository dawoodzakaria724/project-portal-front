import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ErrorStateMatcher } from '@angular/material/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  public showLengthPass: boolean = false;
  public showMatchPass: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private readonly authService: AuthService,
    private route: ActivatedRoute,
    private metaService: Meta,
    private router: Router
  ) {
    this.registerForm = this.formBuilder.group({
      email: [''],
      pass: [''],
      pass2: [''],
    });
  }

  ngOnInit() {
    this.registerForm.valueChanges.subscribe((e) => {
      if (e.pass.length < 8) {
        this.showLengthPass = true;
      } else {
        this.showLengthPass = false;
      }
      if (e.pass != e.pass2) {
        this.showMatchPass = true;
      } else {
        this.showMatchPass = false;
      }
    });
    this.metaService.addTags([
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable = yes' },
    ]);
  }

  async onClickRegister() {
    if (
      this.showLengthPass == false &&
      this.showMatchPass == false &&
      this.registerForm.value.email != '' &&
      this.registerForm.value.password != ''
    ) {
      const token = await this.authService.register(this.registerForm.value);
      console.log('retrieved token', token);
      this.router.navigate(['/login']);
    } else {
      alert('invalid credentials');
    }
  }

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  passwordLengthControl = new FormControl('', [Validators.required, Validators.minLength(8)]);

  matcher = new MyErrorStateMatcher();
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
