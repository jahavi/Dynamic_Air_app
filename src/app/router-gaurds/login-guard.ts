import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { FirebaseAuth } from '../auth-service/firebase/firebase-auth';

export const loginGuard: CanActivateFn = (route, state) => {
  console.log(route,state,"loginGuard");
  const authService = inject(FirebaseAuth);
  if (!authService.userDetails()) {
    authService.userDetails.set(null);
    return false;
  }
  return true;
};
