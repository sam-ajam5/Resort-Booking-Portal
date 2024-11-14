import { Booking } from "./booking.model";

export interface Resort
{
    ResortId?:number;
    ResortName:string;
    ResortImageUrl?:string;
    ResortLocation:string;
    ResortAvailableStatus?:string;
    Price?:number;
    Capacity:number;
    Description?:string;
    Bookings?:Booking[];
    
}