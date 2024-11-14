// navbar.component.ts

import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  role: string;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    // Initialize any necessary data or perform actions on component initialization
    this.getRole(); // Call the getRole method when the component initializes
  }

  // Method to get the user's role
  getRole(): string {
     return this.role = this.authService.getUserRole(); // Replace with your actual method to get the user's role
  }
  isLoggedIn() :boolean
  {
    return this.authService.isLoggedIn();
    
  }
}
