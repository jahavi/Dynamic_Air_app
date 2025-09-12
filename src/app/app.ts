import { Component, inject, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterOutlet } from '@angular/router';
import { Loading } from './loading';
import { firebaseConfig } from './auth-service/firebase/firebase-config';
import { FirebaseAuth } from './auth-service/firebase/firebase-auth';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule, MatProgressSpinnerModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'

})
export class App implements OnInit {
  loading = inject(Loading).loading;
  authService = inject(FirebaseAuth)
  router= inject(Router);
  protected readonly title = signal('dynamic-air');
  userDetails:string|null= null;
  ngOnInit(): void {
    this.authService.$user.subscribe((user) => {
      if (user) {
        this.authService.userDetails.set({
          username: user.displayName!,
          email: user.email!
        });
      }
      else {
        this.authService.userDetails.set(null);       
      }
      this.userDetails=this.authService.userDetails()?.username||null;
    });

  }
  
  logout() {
    this.authService.logOutUser();
    // Implement logout functionality here
    this.router.navigate(['']);
    console.log('Logout clicked');
  }
}
