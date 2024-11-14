import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AdminViewResortComponent } from './components/admin-view-resort/admin-view-resort.component';
import { AuthGuard } from './components/auth.guard';
import { RegistrationComponent } from './components/registration/registration.component';
import { AddReviewComponent } from './components/add-review/add-review.component';
import { AddBookingComponent } from './components/add-booking/add-booking.component';
import { AddResortComponent } from './components/add-resort/add-resort.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminViewBookingComponent } from './components/admin-view-booking/admin-view-booking.component';
import { AdminViewReviewComponent } from './components/admin-view-review/admin-view-review.component';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';
import { CustomerViewBookingComponent } from './components/customer-view-booking/customer-view-booking.component';
import { CustomerViewResortComponent } from './components/customer-view-resort/customer-view-resort.component';
import { CustomerViewReviewComponent } from './components/customer-view-review/customer-view-review.component';
import { DeleteBookingComponent } from './components/delete-booking/delete-booking.component';
import { DeleteResortComponent } from './components/delete-resort/delete-resort.component';
import { EditResortComponent } from './components/edit-resort/edit-resort.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'register',component:RegistrationComponent},
  {path:'error',component:ErrorComponent},
  {path:'home',component:HomeComponent},
  {path:'addreview',component:AddReviewComponent, canActivate:[AuthGuard],data:{roles:['Customer']}},
  {path:'addresort',component:AddResortComponent, canActivate:[AuthGuard],data:{roles:['Admin']}},
  {path:'addbooking/:id',component:AddBookingComponent, canActivate:[AuthGuard],data:{roles:['Customer']}},
  {path:'admin',component:AdminDashboardComponent, canActivate:[AuthGuard],data:{roles:['Admin']}},
  {path:'adminviewresort', component:AdminViewResortComponent, canActivate:[AuthGuard],data:{roles:['Admin']}},
  {path:'adminviewbooking',component:AdminViewBookingComponent, canActivate:[AuthGuard],data:{roles:['Admin']}},
  {path: 'adminviewreview',component:AdminViewReviewComponent, canActivate:[AuthGuard],data:{roles:['Admin','Customer']}},
  {path: 'customer',component:CustomerDashboardComponent,canActivate:[AuthGuard],data:{roles:['Customer']}},
  {path:'customerviewbooking',component:CustomerViewBookingComponent,canActivate:[AuthGuard],data:{roles:['Customer']}},
  {path:'customerviewresort',component:CustomerViewResortComponent,canActivate:[AuthGuard],data:{roles:['Customer']}},
  {path:'customerviewreview',component:CustomerViewReviewComponent,canActivate:[AuthGuard],data:{roles:['Customer']}},
  {path:'deletebooking/:id',component:DeleteBookingComponent,canActivate:[AuthGuard],data:{roles:['Customer']}},
  {path:'deleter esort/:id',component:DeleteResortComponent,canActivate:[AuthGuard],data:{roles:['Admin']}},
  {path:'editresort/:id',component:EditResortComponent,canActivate:[AuthGuard],data:{roles:['Admin']}},
  {path:'',pathMatch:'full',redirectTo:'home'}
];

// const routes: Routes = [
//   {path:'login', component:LoginComponent},
//   {path:'register',component:RegistrationComponent},
//   {path:'error',component:ErrorComponent},
//   {path:'home',component:HomeComponent},
//   {path:'addreview',component:AddReviewComponent, canActivate:[AuthGuard],data:{roles:['Customer']}},
//   {path:'addresort',component:AddResortComponent, canActivate:[AuthGuard],data:{roles:['Admin']}},
//   {path:'addbooking/:id',component:AddBookingComponent, canActivate:[AuthGuard],data:{roles:['Customer']}},
//   {path:'admin',component:AdminDashboardComponent, canActivate:[AuthGuard],data:{roles:['Admin']}},
//   {path:'adminviewresort', component:AdminViewResortComponent, canActivate:[AuthGuard],data:{roles:['Admin']}},
//   {path:'adminviewbooking',component:AdminViewBookingComponent, canActivate:[AuthGuard],data:{roles:['Admin']}},
//   {path: 'adminviewreview',component:AdminViewReviewComponent, canActivate:[AuthGuard],data:{roles:['Admin']}},
//   {path: 'customer',component:CustomerDashboardComponent,canActivate:[AuthGuard],data:{roles:['Customer']}},
//   {path:'customerviewbooking',component:CustomerViewBookingComponent,canActivate:[AuthGuard],data:{roles:['Customer']}},
//   {path:'customerviewresort',component:CustomerViewResortComponent,canActivate:[AuthGuard],data:{roles:['Customer']}},
//   {path:'customerviewreview',component:CustomerViewReviewComponent,canActivate:[AuthGuard],data:{roles:['Customer']}},
//   {path:'deletebooking/:id',component:DeleteBookingComponent,canActivate:[AuthGuard],data:{roles:['Customer']}},
//   {path:'deleteresort/:id',component:DeleteResortComponent,canActivate:[AuthGuard],data:{roles:['Admin']}},
//   {path:'editresort/:id',component:EditResortComponent,canActivate:[AuthGuard],data:{roles:['Admin']}},
//   {path:'',pathMatch:'full',redirectTo:'home'}
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
