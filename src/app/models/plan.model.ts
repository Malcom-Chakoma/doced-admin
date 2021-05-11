import { Features } from "./subscription.model";

export interface Plan{
    _id?:string,
    name: string,
    for:string,// recommended for
    amount_per_month: number, // money
    amount_per_year: number, // money
    timestamp: number,
    features:Features
}