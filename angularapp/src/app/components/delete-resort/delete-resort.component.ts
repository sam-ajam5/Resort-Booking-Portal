import { Component } from '@angular/core';
import { ResortService } from '../../services/resort.service';
import { Resort } from 'src/app/models/resort.model';
import { ActivatedRoute, Router } from '@angular/router';
 
@Component({
  selector: 'app-delete-resort',
  templateUrl: './delete-resort.component.html',
  styleUrls: ['./delete-resort.component.css']
})
export class DeleteResortComponent {
  resortId: number;
  resortDetails:Resort={
    ResortId: 0,
    ResortName: '',
    ResortImageUrl: '',
    ResortLocation: '',
    ResortAvailableStatus: '',
    Price: 0,
    Capacity: 0,
    Description: ''
  }
 
  constructor(private resortService: ResortService,private router:Router,private route:ActivatedRoute) {}
  ngOnInit(): void {
    this.route.params.subscribe(
     params=>this.resortId=params.resortId
    );
    this.resortService.getResortById(this.resortId).subscribe(
      data=>this.resortDetails=data,
      error=>console.log(error)
    );
  }
 
  deleteResort(): void {
    this.resortService.deleteResort(this.resortId).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/viewResort']);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
