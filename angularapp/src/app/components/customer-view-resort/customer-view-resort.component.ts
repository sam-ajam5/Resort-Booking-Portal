import { Component, OnInit } from '@angular/core';
import { ResortService } from '../../services/resort.service';
import { Resort } from 'src/app/models/resort.model';
 
@Component({
  
  selector: 'app-customer-view-resort',
  templateUrl: './customer-view-resort.component.html',
  styleUrls: ['./customer-view-resort.component.css']
})
export class CustomerViewResortComponent implements OnInit {
  resorts: Resort[] = [];
 
  constructor(private resortService: ResortService) {}
 
  ngOnInit(): void {
    this.getAllResorts();
  }
 
  getAllResorts(): void {
    this.resortService.getAllResorts().subscribe(
      (resorts) => {
        this.resorts = resorts;
      },
      (error) => {
        console.error('Error fetching resorts:', error);
      }
    );
  }
  
  getSafeImageUrl(base64: string): SafeUrl {
    // Determine the image format based on the base64 string
    const mimeType = base64.startsWith('/9j/') ? 'image/jpeg' : 'image/png';

    return this.sanitizer.bypassSecurityTrustUrl(`${base64}`);
  }
  
}
