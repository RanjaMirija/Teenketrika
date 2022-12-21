import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signinForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.initSigninForm();
  }

  initSigninForm(): void {
    this.signinForm = this.formBuilder.group({
      email: ['',[Validators.email, Validators.required]],
      password: ['',[Validators.required]]
    })
  }

  onSubmitSigninForm():void {
    const email = this.signinForm.value.email;
    const password = this.signinForm.value.password;
    this.authService.signinUser(email, password)
    .then(() => {
      this.route.navigate(['dashboard']);
    }).catch(console.error)
  }

}
