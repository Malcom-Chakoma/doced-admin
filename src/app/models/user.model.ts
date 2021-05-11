export interface User {
    _id: string,
    user_type: string //admin, doctor
    title: string,
    first_name: string,
    middle_initial: string,
    last_name: string,
    phone_numbers: string[]
    specialisation: string,
    country?: string,
    email: string,
    reg_date: number,
    login_info: LoginInfo[],
    password: string,
    created_by: string,
    timestamp: number,
    reg_number: string,
    institution: string,
    doctors_institutions: string[],
    inst_permissions: {
        patients: {
            list: boolean,
            part: boolean,
            full: boolean,
            write: boolean
        },
        doctors: {
            list: boolean,
            part: boolean,
            full: boolean,
            write: boolean
        },
        admins: {
            list: boolean,
            part: boolean,
            full: boolean,
            write: boolean
        },
        settings: {
            list: boolean,
            part: boolean,
            full: boolean,
            write: boolean
        }
    },
    inst_invitation_status: string //invited accepted 
    otp_cell: string,
    last_otp_timestamp: number,
}

export interface LoginInfo {
    device_info: object,
    is_mobile: boolean,
    is_tablet: boolean,
    is_desktop: boolean,
    timestamp: any,
    location: any,

}