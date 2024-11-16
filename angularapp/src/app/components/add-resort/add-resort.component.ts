import { Component } from '@angular/core';
import { ResortService } from '../../services/resort.service';
import { Resort } from 'src/app/models/resort.model';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-add-resort',
  templateUrl: './add-resort.component.html',
  styleUrls: ['./add-resort.component.css']
})
export class AddResortComponent {
  newResort: Resort = {
    ResortId: 0,
    ResortName: '',
    ResortImageUrl: '',
    ResortLocation: '',
    ResortAvailableStatus: '',
    Price: 0,
    Capacity: 0,
    Description: ''

  };
 
  constructor(private resortService: ResortService,private router:Router) {}
 
  addNewResort(): void {
    this.resortService.addResort(this.newResort).subscribe(
      (data) => {
        console.log('Resort added:', data);
        this.newResort = data;
        this.router.navigate(['/viewResorts']);

      },
      (error) => {
        console.error('Error adding resort:', error);
      }
    );
  }
}