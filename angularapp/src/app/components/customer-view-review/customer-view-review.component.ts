import { Component, OnInit } from '@angular/core';
import { Review } from 'src/app/models/review.model';
import { AuthService } from 'src/app/services/auth.service';
import { ResortService } from 'src/app/services/resort.service';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view-review.component.html',
  styleUrls: ['./customer-view-review.component.css']
})
export class CustomerViewReviewComponent implements OnInit {
 review:Review[];
 userId : number;
  constructor(private reviewService:ResortService , private authService : AuthService) { }

  ngOnInit(): void {
    const decoded: any = this.authService.decodeToken();
    this.userId = decoded?.['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'] || '';
    this. getAllReviewsbyuserId();
  }
  getAllReviewsbyuserId()
  {
    this.reviewService.getReviewbyUserId(this.userId).subscribe
    (
      data=>
      {
        this.review = data;
        console.log("Done Successfully");
      }
    );
  }

}
