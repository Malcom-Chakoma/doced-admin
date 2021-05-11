export class Drug {
    name: string;
    dosage: string;
    duration: {
        start_date: number,
        number_of_days: number,
    }
    status: string;
    note: string;
    prescribed_by: string;
    created_by: string;
    timestamp: number;

}
