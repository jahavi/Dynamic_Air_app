import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from "@angular/material/card";
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTimepickerModule } from '@angular/material/timepicker';
import { Http } from '../../auth-service/http/http';
import { Baner } from '../../baner/baner';
import { Loading } from '../../loading';

const URL="https://us-central1-crm-sdk.cloudfunctions.net/flightInfoChallenge"
interface bookingPayload{
  airline: string;
  arrivalDate: string;
  arrivalTime: string;
  flightNumber: string;
  numOfGuests: number;
  comments?: string;
}

@Component({
  selector: 'app-booking',
  imports: [
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatTimepickerModule,
    Baner

  ],
  templateUrl: './booking.html',
  styleUrl: './booking.scss'
})
export class Booking {
  private fb = inject(FormBuilder);
  private http = inject(Http);
  loading = inject(Loading);
  showMsg: boolean=false;
  msgDetails:string='';
  successBanner:boolean=true;
  airlines: string[] = [
    'Dynamic Air',
    'American Airlines',
    'Delta',
    'United',
    'Southwest',
    'JetBlue'
  ];

  bookingForm: FormGroup = this.fb.group({
    airline: ['', Validators.required],
    arrivalDate: ['', Validators.required],
    arrivalTime: ['', Validators.required],
    flightNumber: ['', Validators.required],
    numOfGuests: [1, [Validators.required, Validators.min(1)]],
    comments: [null]
  });


  submitBooking() {

    if (this.bookingForm.valid) {
      this.showMsg = false;
      this.loading.setLoading(true);
      const payload=this.bookingForm.getRawValue() as bookingPayload;
      payload.arrivalDate=new Date(payload.arrivalDate).toISOString().split('T')[0];
      this.http.bookingTicket(URL,payload).subscribe({
        next:(res)=>{
          this.loading.setLoading(false);
          this.successBanner=true;
          this.msgDetails='Booking successful!';
          this.showMsg=true;
          this.bookingForm.reset();
          console.log('Booking successful:', res);
        },
        error:(err)=>{
          this.successBanner=false;
          this.loading.setLoading(false);
          this.msgDetails='Booking failed. Please try again.';
          this.showMsg=true;
          console.error('Error booking ticket:', err);
        }
      }); 
    }
  }

  closeBaner(){
    this.showMsg=false;
  }
}
