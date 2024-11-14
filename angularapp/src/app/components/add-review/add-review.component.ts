import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Review } from 'src/app/models/review.model';
import { AuthService } from 'src/app/services/auth.service';
import { ResortService } from 'src/app/services/resort.service';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {
  newReview: Review = {
    ReviewId: 0,
    UserId: 0,
    Subject: '',
    Body: '',
    Rating: 0,
    DateCreated: new Date(),
  };
  Username: string; // Add this line to store the user's name

  constructor(
    private resortService: ResortService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    // Initialize your user ID here
    const decoded: any = this.authService.decodeToken();
    this.newReview.UserId = decoded?.['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'] || 0;
    const numberssd = decoded?.['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'] || '';

    // Get the user's name based on the user ID (assuming you have a method in your service)
    this.authService.getUserById(numberssd).subscribe(
      (user) => {
        console.log(user);
        this.Username = user.UserName;
        console.log(this.Username);
         // Replace 'name' with the actual property name for the user's name
      },
      (error) => {
        console.error('Error fetching user details:', error);
      }
    );
    console.log(numberssd);
  }

  addReview(): void {
    this.resortService.addReview(this.newReview).subscribe(
      (data) => {
        console.log('Review added:', data);
        this.newReview = data;
        this.router.navigate(['/customerviewreview']);
      },
      (error) => {
        console.error('Error adding review:', error);
      }
    );
  }
}
