import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/models/booking.model';
import { Resort } from 'src/app/models/resort.model';
import { Review } from 'src/app/models/review.model';
import { User } from 'src/app/models/user.model';
import { ResortService } from 'src/app/services/resort.service';

@Component({
  selector: 'app-admin-view-review',
  templateUrl: './admin-view-review.component.html',
  styleUrls: ['./admin-view-review.component.css']
})
export class AdminViewReviewComponent implements OnInit {
  review:Review[];
 
  constructor(private reviewService:ResortService) { }

  ngOnInit(): void {
    this.getAllReviews();
  }
  getAllReviews(){
    this.reviewService.getAllReview().subscribe(
     data=>this.review=data
    );
    error=>console.log(error);
  }

}
