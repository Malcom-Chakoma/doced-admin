export interface Institution {
    institution_name: any;
    _id: string,
    name: string,
    logo_url: string,
    type: string, // hospital, group, private
    head_office: Office,
    locations: Office[],
    created_date: number,
    subscription: any, // id of the sub
    theme_colors: Colors,
    //populated from backend
    subscribed: boolean
}

export interface Office {
    phone_numbers: string[],
    street_address: string,
    city: string,
    country: string,
    //new filds
    walk_ins: boolean, //Added
    appointments: boolean
}

export interface Colors {
    primary: string,
    secondary: string
}