export interface Patient {
    _id: string,
    institutions: Institutions
    personal_info: PersonalInfo,
    account_info: AccountInfo,
    registration_date: any,
    created_by: string,
    date_of_birth: number,
    gender: string,
    allergies: any[],
    medical_info: string,
    update_info: UpdateInfo,
    record_history?: Patient[],
    // Transfer Record
    transfers: TransferRecord[],
    delete: boolean,
    // Doctors Record Permissons
    doctors: PatientDoctor[],
    documents: any[],
    // populated from backend
    subscribed: boolean,
    institution_name: string



}

export interface PatientDoctor {
    institution_id: string,
    doctor_id: string,
    record_access: {
        part: boolean,
        full: boolean,
        write: boolean
    },
    invitation_status: string // invited accepted declined
}

export interface Institutions {
    hospital_id: string,
    group_id: string,
    private_id: string
}
export interface UpdateInfo {
    user_id: string,
    institution_id: string,
    timestamp: any,
    action: string,
}
export interface NextOfKinInfo {
    first_name: string,
    last_name: string,
    relationship: string,
    phone_numbers: string[]
}
export interface AccountInfo {
    total_claims: number,
    total_balance: number,
}
export interface PersonalInfo {
    first_name: string,
    middle_name: string,
    last_name: string,
    id_no: string,
    email: string,
    phone_numbers: string[],
    address: string,
    city: string,
    country: string,
    next_of_kins: NextOfKinInfo[],
    medical_aid_info: MedicalAidInfo,
    marital_status: string,

}
export interface MedicalAidInfo {
    medical_aid: string,
    member_name: string,
    member_number: string,
    relationship_to_member: string,
    patient_prefix_number: string,
    membership_number: string,
}
export interface TransferRecord {
    institution_id: string,
    timestamp: number,
    transferred_by: any,
    authorised_by: any,
}