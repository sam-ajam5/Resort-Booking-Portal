import { User } from "./user.model";

export interface Review
{
    ReviewId:number;
    UserId:number;
    Subject:string;
    Body:string;
    Rating:number;
    DateCreated:Date;
    User?:User;
}