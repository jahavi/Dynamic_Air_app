import { inject, Injectable, signal } from '@angular/core';
import { FirebaseAuthConfig } from './firebase-auth-config';
import { from, Observable } from 'rxjs';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, user } from '@angular/fire/auth';
import { userInterface } from './user-interface';


@Injectable({
  providedIn: 'root'
})
export class FirebaseAuth {
fireBaseAuthConfig=inject(FirebaseAuthConfig);
$user = user(this.fireBaseAuthConfig.auth);
userDetails = signal<userInterface   | null | undefined>(undefined);
 provider = new GoogleAuthProvider();
constructor() { 
   this.provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
}


createUser(username:string,email:string,password:string):Observable<void>{
  const userDetails= createUserWithEmailAndPassword(this.fireBaseAuthConfig.auth,email,password).then((res) => {
    updateProfile(res.user, { displayName: username })
  });
 return from(userDetails);
}

loginUser(email:string,password:string):Observable<void>{
  const signInProcess=signInWithEmailAndPassword(this.fireBaseAuthConfig.auth, email,password).then((res)=>{
    console.log('User logged in:', res.user);
  });
  return from(signInProcess);
  }
logOutUser():Observable<void>{
  const logOutProcess=signOut(this.fireBaseAuthConfig.auth).then(()=>{
    console.log('User logged out successfully.');
  });
  return from(logOutProcess); 
}
googleSignIn():Observable<void>{
  const googleSignInProcess=signInWithPopup(this.fireBaseAuthConfig.auth,this.provider).then((res)=>{
    console.log('User signed in with Google:',res.user);
  });
  return from(googleSignInProcess);
}

}
