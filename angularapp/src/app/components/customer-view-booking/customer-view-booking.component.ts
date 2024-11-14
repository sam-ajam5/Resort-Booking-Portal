import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';
import { Booking } from 'src/app/models/booking.model';
import { Resort } from 'src/app/models/resort.model';
import { Router } from '@angular/router';
import { ResortService } from 'src/app/services/resort.service';

@Component({
  selector: 'app-customer-view-booking',
  templateUrl: './customer-view-booking.component.html',
  styleUrls: ['./customer-view-booking.component.css']
})
export class CustomerViewBookingComponent implements OnInit {
  // resort:Resort[];
   book:Booking[];

  constructor(private service:BookingService, private S:ResortService, private router:Router) { }

  ngOnInit(): void {
    this.getAllBookings();
  }
   getAllBookings():void
   {
    this.service.getAllBookings().subscribe(
      data=>this.book=data,
      error=>console.log(error)
    )
   }
   delete(UserId:number)
   {
    this.router.navigate(['/deleteConfirmation', UserId]);
   }
}
