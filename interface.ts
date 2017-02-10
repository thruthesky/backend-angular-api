export interface REQUEST {
    mc?: string;
    session_id?: string;
}
export interface RESPONSE {
    code: number;
    message?: string;
};


/**
 * 
 * This is identical of 'user' table.
 */
export interface USER_DATA {
    id: string;
    password: string;
    name?: string;
    nickname?: string;
    email?: string;
    mobile?: string;
    landline?: string;
    gender?: string;
    birthday?: string;
    country?: string;
    province?: string;
    city?: string;
    address?: string;
    zipcode?: string;
    stamp_last_login?: number;
    stamp_registration?: number;
    session_id?: string;
};

export interface USER_LOGIN_REQUEST_DATA extends REQUEST {
    id: string;
    password: string;
};
export interface USER_LOGIN_REPONSE_DATA extends RESPONSE {
    data: {
        session_id: string;
    }
};


export interface USER_LOGOUT_REQUEST_DATA extends REQUEST {
};


export interface USER_REGISTER_REQUEST_DATA extends REQUEST, USER_DATA {
    meta?: any;
}


export interface USER_REGISTER_RESPONSE_DATA extends RESPONSE, USER_DATA {
    meta?: any;
}