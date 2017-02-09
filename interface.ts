export interface REQUEST {
    mc?: string;
    session_id?: string;
}
export interface RESPONSE {
    code: number;
    message?: string;
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