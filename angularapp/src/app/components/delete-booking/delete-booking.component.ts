import { Component } from '@angular/core';
import { ResortService } from 'src/app/services/resort.service';
import { Resort } from 'src/app/models/resort.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from 'src/app/models/booking.model';
import { BookingService } from 'src/app/services/booking.service';
 
@Component({
  selector: 'app-delete-booking',
  templateUrl: './delete-booking.component.html',
  styleUrls: ['./delete-booking.component.css']
})
export class DeleteBookingComponent {
 userId:number;
 booking:Booking={
   NoOfPersons: 0,
   FromDate: undefined,
   ToDate: undefined,
   Status: '',
   TotalPrice: 0,
   Address: '',
   UserId: 0
 }
 resort:Resort={
   ResortId: 0,
   ResortName: '',
   ResortImageUrl: '',
   ResortLocation: '',
   ResortAvailableStatus: '',
   Price: 0,
   Capacity: 0,
   Description: ''
 }
  UserId: number;
 
  constructor(private service:BookingService, private s: ResortService,private router:Router,private route:ActivatedRoute) {}
  ngOnInit(): void {
    this.route.params.subscribe(
     params=>this.UserId=params.UserId
    );
    this.service.getBookingsByUserId(this.UserId).subscribe(
      data=>this.booking=data,
      error=>console.log(error)
    );
  }
 
  deleteConfirmation(UserId:number): void {
    this.service.deleteBooking(UserId).subscribe();
    console.log("Deleted Successfully");
    this.router.navigate(['/customerviewbooking']);

  }
  cancel()
  {
    this.router.navigate(['/customerviewbooking']);
  }
}
