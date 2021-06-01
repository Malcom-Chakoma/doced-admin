export interface Subscription {
    _id: string;
    type: string;
    duration: string; // month or year
    //change to string
    start_date: number;
    expiry_date: number;
    amount: number;
    prev_subscription: string;
    timestamp: number;
    //new field
    free_trial: boolean;
    features: Features;

}
export interface Features {
    patients: { count: number; foreach_extra : number; foreach_extra_monthly_amount:number; foreach_extra_annual_amount:number };
    doctors: { count: number; foreach_extra :number; foreach_extra_monthly_amount:number; foreach_extra_annual_amount:number };
    admins: { count: number; foreach_extra:number; foreach_extra_monthly_amount:number; foreach_extra_annual_amount:number };
    files: { count: number; foreach_extra:number; foreach_extra_monthly_amount:number; foreach_extra_annual_amount:number};
    notes: { available: boolean };
    payments: { available: boolean };
    schedules: { available: boolean };
    reminders: { available: boolean };
    analytics: { type: string };
}
