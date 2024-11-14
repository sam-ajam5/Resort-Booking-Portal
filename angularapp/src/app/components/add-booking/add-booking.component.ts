import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from 'src/app/models/booking.model';
import { Resort } from 'src/app/models/resort.model';
import { ResortService } from 'src/app/services/resort.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.css']
})
export class AddBookingComponent implements OnInit {
  existingResort:Resort={
    ResortId: 0,
    ResortName: '',
    ResortImageUrl: '',
    ResortLocation: '',
    ResortAvailableStatus: '',
    Price: 0,
    Capacity: 0,
    Description: ''
  }

  newBooking:Booking={
    NoOfPersons: 0,
    FromDate: undefined,
    ToDate: undefined,
    Status: '',
    TotalPrice: 0,
    Address: '',
    UserId: 0,
    Resort: this.existingResort,
    ResortId : 0
  }
  resortId: number;

  constructor(private service:BookingService, private resortService:ResortService, private router:Router, private route: ActivatedRoute,private authService : AuthService) { }
  
 
  ngOnInit(): void {
    const decoded: any = this.authService.decodeToken();
    const numberssd = decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];
    // Getting the user ID (assuming you have a method in your service)
    this.newBooking.UserId = numberssd;
    
    this.route.params.subscribe(
      data => {
        this.resortId = data.id; // Correct assignment
        console.log(this.resortId);
        // Fetch resort details based on the ID
        this.resortService.getResortById(this.resortId).subscribe(
          data => {
            this.existingResort = data;
            console.log(this.existingResort);
          },
          error => console.log(error)
        );
      },
      error => console.log(error)
    );
   
  }
  addBooking()
  {
    this.newBooking.ResortId = this.resortId;
    this.service.addBooking(this.newBooking).subscribe(
      
      data=>
      {
        this.newBooking=data;   
        console.log(this.newBooking);
      },
      error=>console.log(error)
    )
  }

  openDialog(): void {
    const modal = document.getElementById('paymentModal');
    if (modal) {
      modal.style.display = 'block';
    }
}
 
openDialog2(): void {
    const modal = document.getElementById('finalpage');
    if (modal) {
      modal.style.display = 'block';
    }
}
 

 
closeDialog(): void {
    const paymentModal = document.getElementById('paymentModal');
    const finalPageModal = document.getElementById('finalpage');
    if (paymentModal) {
      paymentModal.style.display = 'none';
    }
    if (finalPageModal) {
      finalPageModal.style.display = 'none';
    }
}


  
    
}
