import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/models/login.model';
import { AuthService } from 'src/app/services/auth.service';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  newLogin : LoginModel = {Email:'',Password:''};
 
  constructor(private service: AuthService, private router: Router) { }
 
  ngOnInit() {
  }
  Login() : void
  {
    this.service.login(this.newLogin.Email,this.newLogin.Password).subscribe
    (
      data=>{
        console.log("Successful");
        console.log(data);
        // localStorage.setItem('accessToken', data.token);
        if(this.service.getUserRole() == 'Admin')
        {
          this.router.navigate(['/admin']);

        }
        else
        {
          this.router.navigate(['/customer']);
          
        }
        
      },
      err=>console.log(err)
 
    );
  }
}