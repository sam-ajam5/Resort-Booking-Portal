import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/models/booking.model';
import { BookingService } from 'src/app/services/booking.service';
import {  Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { Resort } from 'src/app/models/resort.model';

@Component({
  selector: 'app-admin-view-booking',
  templateUrl: './admin-view-booking.component.html',
  styleUrls: ['./admin-view-booking.component.css']
})
export class AdminViewBookingComponent implements OnInit {

  constructor(private service:BookingService, private router:Router) { }
   booking:Booking[] = [];
  
   
  ngOnInit(): void {
    this.getAllBookings();
  }
  getAllBookings()
  {
    this.service.getAllBookings().subscribe(
      data=>
      {
        this.booking =data;
        console.log(data);
      },
       error=>console.log(error)
    )
  }
  Accepted(UserId:number):void
  {
    this.router.navigate(['/adminViewReview',UserId]);
  }
  Reject(UserId:number):void
  {
    this.router.navigate(['/adminViewResort',UserId]);
  }
  
}
