import { Component, computed, Inject, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FirebaseAuth } from '../auth-service/firebase/firebase-auth';
import { MatIcon } from '@angular/material/icon';
import { Loading } from '../loading';
import { Baner } from "../baner/baner";
import { Router } from '@angular/router';

export enum create {
  createAcc = 'Create Account',
  create = 'Create',
  login = 'Log in'
}
@Component({
  selector: 'app-login',
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatButton, ReactiveFormsModule, MatIcon, Baner],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  private fb = inject(FormBuilder);
  private Auth = inject(FirebaseAuth);
  createAcc = create.createAcc;
  titel = create.login;
  loading = inject(Loading);
  bannerMessage: string | null = null;
  create: any;
  router: any = inject(Router);
  successBanner: boolean = false;
  loginForm: FormGroup = this.fb.group({
    username: [''],
    email: ['', [Validators.email]],
    password: ['', Validators.minLength(6)]
  });


  createUser() {
    if (this.loginForm.valid) {
      this.loading.setLoading(true)
      this.successBanner = false;
      const rawData = this.loginForm.getRawValue();
      this.Auth.createUser(rawData.username, rawData.email, rawData.password).subscribe({
        next: (res) => {
          this.loading.setLoading(false);
          this.successBanner = true;
          this.cancelCreate()
          this.loginForm.reset();
          this.bannerMessage = 'User created successfully please login.';
          console.log('User created successfully:', res);
        },
        error: (err) => {
          this.loading.setLoading(false)
          this.bannerMessage = 'Invalid Details. Please try again.';
          console.log('Error creating user:', err);
        }
      });
    }
  }
  login() {
    if (this.loginForm.valid) {
      this.successBanner = false;
      this.loading.setLoading(true)
      const rawData = this.loginForm.getRawValue();
      this.Auth.loginUser(rawData.email, rawData.password).subscribe({
        next: (res) => {
          this.loading.setLoading(false);
          this.navigateToBooking();
          this.loginForm.reset();
          console.log('User loged in successfully');
        },
        error: (err) => {
          this.loading.setLoading(false)
          this.bannerMessage = 'Invalid email or password. Please try again.';
          console.log('Error loged in user:', err);
        }
      });
      console.log('Login form submitted:', this.loginForm.value);
    }
  }



  signInWithGoogle() {
    this.loading.setLoading(true)
    this.Auth.googleSignIn().subscribe({
      next: (res) => {
        this.loading.setLoading(false);
        this.navigateToBooking();
        console.log('User loged in successfully:', res);
      },
      error: (err) => {
        this.loading.setLoading(false)
        this.bannerMessage = 'Google sign-in failed. Please try again.';
        console.log('Error loged in user:', err);
      }
    });
  }
  createAccount(buttonText: string) {

    if (buttonText === create.createAcc) {
      this.createAcc = create.create;
      this.titel = create.createAcc;
    }
    if (buttonText === create.create) {
      this.createUser()
    }


  }

  cancelCreate() {
    this.createAcc = create.createAcc;
    this.titel = create.login;
    this.loginForm.reset();
  }
  closeError() {
    this.bannerMessage = null;
  }
navigateToBooking() {
      this.Auth.$user.subscribe((user) => {
      if (user) {
           this.router.navigateByUrl('/booking');
      }
      
    });

}
}
