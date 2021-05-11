export interface MedicalAid{
    _id?:string,
    admin_id: string,
    medical_aid_name:string,
    status:string,
    sort_index:number,
    saved_by:string,
    created_timestamp:number,
    modified_records:any[],
    original_record:object,
    delete:boolean,
}