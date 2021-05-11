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
    patients: { count: number; unlimited: boolean };
    doctors: { count: number; unlimited: boolean };
    admins: { count: number; unlimited: boolean };
    files: { count: number; unlimited: boolean };
    notes: { available: boolean };
    payments: { available: boolean };
    schedules: { available: boolean };
    reminders: { available: boolean };
    analytics: { available: boolean };
}
