import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Http {
  private http = inject(HttpClient);

  bookingTicket<T>(url: string, body: any): Observable<T> {
    return this.http.post<T>(url, body);
  }
}
