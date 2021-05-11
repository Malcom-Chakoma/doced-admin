export interface Admin{
    _id?:string,
    user_type: string,
    gender: string,
    first_name: string,
    middle_initial: string,
    last_name: string,
    phone_numbers: any[],
    email: string,
    department:{type:String},
    login_info: any[],
    password: string,
    created_by: string,
    timestamp: number,
    last_login:number,
    status:string
}