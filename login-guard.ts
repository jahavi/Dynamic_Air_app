import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { FirebaseAuth } from '../auth-service/firebase/firebase-auth';

export const loginGuard: CanActivateFn = (route, state) => {
  const authService = inject(FirebaseAuth);

  if (!authService.userDetails()) {
    return false;
  }
  return true;
};
