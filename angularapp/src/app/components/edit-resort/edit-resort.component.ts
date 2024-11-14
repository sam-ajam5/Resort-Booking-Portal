import { Component } from '@angular/core';
import { ResortService } from '../../services/resort.service';
import { Resort } from 'src/app/models/resort.model';
import { ActivatedRoute, Router } from '@angular/router';
 
@Component({
  selector: 'app-edit-resort',
  templateUrl: './edit-resort.component.html',
  styleUrls: ['./edit-resort.component.css']
})
export class EditResortComponent {
  resortDetails: Resort = {
    ResortId: 0,
    ResortName: '',
    ResortImageUrl: '',
    ResortLocation: '',
    ResortAvailableStatus: '',
    Price: 0,
    Capacity: 0,
    Description: ''
  };
  id:number;
 
  constructor(private resortService: ResortService,private route:ActivatedRoute,private router:Router) {}
  ngOnInit(): void {
    this.route.params.subscribe(
   params=>this.id=params.id
    );
    this.resortService.getResortById(this.id).subscribe(
      data=>this.resortDetails=data,
      error=>console.log(error)
    );
  }

  updateResort(): void {
    this.resortService.updateResort(this.id,this.resortDetails).subscribe(
      () => {
        console.log('Resort updated');
        this.router.navigate(['/viewResort']);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}

