import { HttpInterceptorFn } from '@angular/common/http';
import { FirebaseAuth } from '../firebase/firebase-auth';
import { inject } from '@angular/core';
// import { environment } from '';
import { environment } from '../../../environments/environment';



export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(FirebaseAuth);
  // const authToken = "WW91IG11c3QgYmUgdGhlIGN1cmlvdXMgdHlwZS4gIEJyaW5nIHRoaXMgdXAgYXQgdGhlIGludGVydmlldyBmb3IgYm9udXMgcG9pbnRzICEh";  
  const authToken = environment.httpPostToken;

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
