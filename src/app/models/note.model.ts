export interface Note {
    _id?: string,
    title: string,
    body: string,
    shared: boolean,
    update_info?: UpdateInfo,
    doctor_id: string,
    institution_id?: string,
    event_id?: string,
    patient_id?: string
    timestamp: number,
    record_history?: Note[]
}

export interface UpdateInfo {
    doctor_id: string;
    timestamp: any;
    action: string;
    body: string
}