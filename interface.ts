export interface REQUEST {
    mc?: string;
    session_id?: string;
}
export interface RESPONSE {
    code: number;
    message?: string;
};

export interface ID_PASSWORD {
    id?: string;
    password?: string;
};

/**
 * 'user' table data except 'id, 'password'.
 */
export interface USER_FIELDS {
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
}


export interface USER_SESSION_ID_RESPONSE extends RESPONSE {
    data: {
        session_id: string;
    }
}



/**
 *
 * This is identical of 'user' table.
 */
export interface USER_DATA extends ID_PASSWORD, USER_FIELDS {

};

export interface USER_DATA_REQUEST_DATA extends REQUEST {}

export interface USER_DATA_RESPONSE extends RESPONSE, USER_FIELDS{}

export interface USER_META_REQUEST_DATA  extends REQUEST{}

export interface USER_META_RESPONSE_DATA extends RESPONSE{}



export type USER_DATA_RESPONSE_DATA = USER_DATA_RESPONSE;

export interface USER_LOGIN_REQUEST_DATA extends REQUEST, ID_PASSWORD { };
export type USER_LOGIN_REPONSE_DATA = USER_SESSION_ID_RESPONSE;

export interface USER_LOGOUT_REQUEST_DATA extends REQUEST { };


export interface USER_REGISTER_REQUEST_DATA extends REQUEST, USER_DATA {
    meta?: any;
};
export type USER_REGISTER_RESPONSE_DATA = USER_SESSION_ID_RESPONSE;

export interface USER_UPDATE_REQUEST_DATA extends REQUEST, USER_FIELDS {
    meta?: any;
};
export type USER_UPDATE_RESPONSE_DATA = USER_SESSION_ID_RESPONSE;