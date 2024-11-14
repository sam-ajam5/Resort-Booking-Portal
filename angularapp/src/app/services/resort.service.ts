import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Resort } from '../models/resort.model';
import { Review } from '../models/review.model';
 
 
@Injectable({
  providedIn: 'root'
})
export class ResortService {

private apiUrl = 'https://8080-bcaaffbbceceddccecfbdcadcaebdade.premiumproject.examly.io'; // Replace with  actual

 
  constructor(private http: HttpClient) {}
 
  addResort(resort: Resort): Observable<Resort> {
    return this.http.post<Resort>(this.apiUrl+'/api/resort',resort);
  }
 
  getAllResorts(): Observable<Resort[]> {
    return this.http.get<Resort[]>(this.apiUrl+'/api/resort');
  }
 
  updateResort(id:number,resortDetails: Resort): Observable<any> {
   return this.http.put(this.apiUrl+'/api/resort/'+id, resortDetails);
  }
 
  deleteResort(resortId: number): Observable<void> {
    return this.http.delete<void>(this.apiUrl+'/api/resort/'+resortId);
  }
  getResortById(resortId:number):Observable<any>{
    return this.http.get<any>(this.apiUrl+'/api/resort/'+resortId);
  }
  getAllReview() : Observable<Review[]>
  {
    return this.http.get<Review[]>(this.apiUrl + '/api/Review');
  }
 
  addReview(review: Review): Observable<Review>
  {
    return this.http.post<Review>(this.apiUrl + '/api/Review', review);
  }
 
  getReview(reviewId: number) : Observable<Review>
  {
    return this.http.get<Review>(this.apiUrl + '/api/Review/' + reviewId);
  }

  getReviewbyUserId(userId : number) : Observable<Review[]>
  {
    return this.http.get<Review[]>(this.apiUrl + '/api/Review/user/' + userId);
  }

 
 
}
