import { Component, OnInit } from '@angular/core';
import { ResortService } from '../../services/resort.service';
import { Resort } from 'src/app/models/resort.model';
import { AuthService } from 'src/app/services/auth.service';
 
@Component({
  
  selector: 'app-admin-view-resort',
  templateUrl: './admin-view-resort.component.html',
  styleUrls: ['./admin-view-resort.component.css']
})
export class AdminViewResortComponent implements OnInit {
  resorts: Resort[] = [];
 
  constructor(private resortService: ResortService,private authService:AuthService) {}
 
  ngOnInit(): void {
    this.getAllResorts();
  }
 
  getAllResorts(): void {
    if(this.authService.getUserRole()=='Admin')
    {
      this.resortService.getAllResorts().subscribe(
        data => {
          this.resorts = data;
          console.log(data);
        }
      );

    }
    else
    {
      console.log("Unauthorized");
    }
   
  }
}
