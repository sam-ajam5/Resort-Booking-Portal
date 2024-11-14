import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Booking } from '../models/booking.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
 
  constructor(private http: HttpClient) { }

  // Add you API url
    apiUrl:string ='https://8080-bcaaffbbceceddccecfbdcadcaebdade.premiumproject.examly.io';

    addBooking(booking:Booking):Observable<Booking>
    {
      return this.http.post<Booking>(this.apiUrl + '/api/booking', booking);
    }
    getAllBookings():Observable<Booking[]>
    {
      return this.http.get<Booking[]>(this.apiUrl + '/api/booking');
    }
    getBookingsByUserId(UserId:number):Observable<Booking>
    {
      return this.http.get<Booking>(this.apiUrl + '/api/booking/'+ UserId);
    }

            // Functionality not specified in the question description
    updateBooking(booking:Booking,bookingId:number):Observable<Booking>
    {
      return this.http.put<Booking>(this.apiUrl +'/api/booking/'+ bookingId ,booking);
    }

    deleteBooking(BookingId:number):Observable<void>
    {
      return this.http.delete<void>(this.apiUrl + '/api/booking/' + BookingId);
    }
}
