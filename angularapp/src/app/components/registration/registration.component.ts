import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
 
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  model: User = {
    UserId: null,
    Email: '',
    Password: '',
    UserName: '',
    MobileNumber: '',
    UserRole: ''
  };
 confirmPassword : string;
  constructor(private authService : AuthService, private router: Router) {}
 
  ngOnInit(): void {
   
  }
 
  OnSubmit() : void
  {
    this.authService.register(this.model).subscribe
    (
      ()=>{console.log("Sucess");
        this.router.navigate(['/login']);
    },
      error=>console.log(error)
 
    );
 
 
  }
 
}