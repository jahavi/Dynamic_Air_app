import { Injectable } from '@angular/core';
import { firebaseConfig } from './firebase-config';
import { initializeApp } from '@angular/fire/app';
import { getAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthConfig {
  private _appIntialized = initializeApp(firebaseConfig);
   private _auth = getAuth(this._appIntialized);
   get auth() {
     return this._auth;
   }
   
}
