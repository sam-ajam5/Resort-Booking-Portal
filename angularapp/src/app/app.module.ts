import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBookingComponent } from './components/add-booking/add-booking.component';
import { AddResortComponent } from './components/add-resort/add-resort.component';
import { AddReviewComponent } from './components/add-review/add-review.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminViewBookingComponent } from './components/admin-view-booking/admin-view-booking.component';
import { AdminViewResortComponent } from './components/admin-view-resort/admin-view-resort.component';
import { AdminViewReviewComponent } from './components/admin-view-review/admin-view-review.component';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';
import { CustomerViewBookingComponent } from './components/customer-view-booking/customer-view-booking.component';
import { CustomerViewResortComponent } from './components/customer-view-resort/customer-view-resort.component';
import { CustomerViewReviewComponent } from './components/customer-view-review/customer-view-review.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ErrorComponent } from './components/error/error.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DeleteBookingComponent } from './components/delete-booking/delete-booking.component';
import { AuthInterceptor } from './auth.interceptor';
import { EditResortComponent } from './components/edit-resort/edit-resort.component';



@NgModule({
  declarations: [
    AppComponent,
    AddBookingComponent,
    AddResortComponent,
    AddReviewComponent,
    AdminDashboardComponent,
    AdminViewBookingComponent,
    AdminViewResortComponent,
    AdminViewReviewComponent,
    CustomerDashboardComponent,
    CustomerViewBookingComponent,
    CustomerViewResortComponent,
    CustomerViewReviewComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    RegistrationComponent,
    ErrorComponent,
    DeleteBookingComponent,
    EditResortComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
