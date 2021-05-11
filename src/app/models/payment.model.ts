import { Note } from './note.model';

export interface Payment {
    payment_date: number,  //
    currency: string,
    amount: number,
    medical_aid_paid: number,
    type_of_payment: string,
    notes: Note[],
    event_type: string,
    event_id: string,
    patient_id: string,
    institution_id: string,
    timestamp: number,
    prev_payment: Payment | null,
    exchange_rate: ExchangeRate
}

export interface ExchangeRate {
    currency_pair: string;
    rate: number;
    timestamp: number;
    created_by: {};

}