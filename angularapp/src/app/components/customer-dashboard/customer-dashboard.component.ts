import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  Logout(): void
  {
    this.authService.logout().subscribe(
      data => {
        console.log("logged out successfully!");
        this.router.navigate(['login']);
      }, 
      error => console.log(error)
    );
  }

}
