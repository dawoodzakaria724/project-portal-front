import { createTokenForExternalReference } from '@angular/compiler/src/identifiers';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, FormBuilder, FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  public loginForm: FormGroup;
  public invalidCred: boolean = false;

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: [''],
    });
  }

  ngOnInit(): void {}

  async onClickLogin() {
    console.log(this.loginForm.value);
    const data = await this.authService.login(this.loginForm.value);
    console.log(data);
    if (data.token) {
      this.router.navigate(['/main']);
    } else {
      this.invalidCred = true;
    }
  }

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  passwordFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();
}
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
