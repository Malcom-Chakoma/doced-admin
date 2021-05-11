export interface Procedure{
    _id?:string,
    admin_id:string ,
    procedure_name:string ,
    type:string,
    status: string ,
    saved_by: string ,
    timestamp: number,
    delete: boolean,

}