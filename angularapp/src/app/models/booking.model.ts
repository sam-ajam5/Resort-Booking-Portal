import { Resort } from "./resort.model";
import { User } from "./user.model";

export interface Booking
{
    BookingId?:number;
    NoOfPersons:number;
    FromDate:Date;
    ToDate:Date;
    Status:string;
    TotalPrice:number;
    Address:string;
    UserId:number;
    User?:User;
    ResortId?:number;
    Resort?:Resort;
}