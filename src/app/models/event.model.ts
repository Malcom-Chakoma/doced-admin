import { Note } from './note.model';
import { Drug } from './drug.model';
export interface Event {
    // shared data
    _id: string,
    institution_id: string,
    patient_id: string,
    event_type: string,
    starts: number,
    ends: number,
    location: string,
    doctors: string[],
    medication: Drug[],
    account_info: AccountInfo,
    status: string,
    created_by: string,
    timestamp: number,
    record_history: Event[],
    update_info?: UpdateInfo,
    delete: boolean,
    //

    seen_by?: SeenBy[],

    // procedure
    procedure_name?: string,
    type_of_procedure?: string,
    // specialisation?: string,
    assistants?: string[],
    // notes to be be populated from backend
    notes?: Note[],
    note?: string,
}
export class AccountInfo {
    total_bill: number;
    amount_to_pay: number;
    medical_aid_claim: number;
    balance: number;
}

export interface UpdateInfo {
    institution_id: string,
    user_id: string,
    timestamp: number,
    action: string,
}

export interface SeenBy {
    doctor_id: string,
    timestamp: number
}



export interface ExchangeRate {
    currency_pair: string,
    rate: number,
    timestamp: number,
    created_by: {},

}

export interface Payment {
    currency: string,
    amount: number,
    medical_aid_paid?: number,
    method_of_payment: string,
    prev_payment: Event,
    exchange_rates: ExchangeRate[]
    paid_for_event: any
}




