import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Loading {
  private isLoading = signal(false);

  get loading() {
    return this.isLoading;
  }


  setLoading(loading: boolean) {
    this.isLoading.set(loading);
    // Implement your loading state management logic here
  }
}
