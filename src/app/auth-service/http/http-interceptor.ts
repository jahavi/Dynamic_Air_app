import { HttpInterceptorFn } from '@angular/common/http';
import { FirebaseAuth } from '../firebase/firebase-auth';
import { inject } from '@angular/core';


export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(FirebaseAuth);
  const authToken = "WW91IG11c3QgYmUgdGhlIGN1cmlvdXMgdHlwZS4gIEJyaW5nIHRoaXMgdXAgYXQgdGhlIGludGVydmlldyBmb3IgYm9udXMgcG9pbnRzICEh";

  // Clone the request to add the new header.
  const authReq = req.clone({
    setHeaders: {
      token: authToken,
      candidate: authService.userDetails()?.username || ''
    }
  });

  // Pass the cloned request with the header to the next handler in the chain.
  return next(authReq);
};
