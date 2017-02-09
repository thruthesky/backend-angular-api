import { Injectable } from '@angular/core';
import { Base } from './base';
import { USER_LOGIN_REQUEST_DATA, USER_LOGIN_REPONSE_DATA,
         USER_LOGOUT_REQUEST_DATA } from './interface';
import { KEY_SESSION_ID } from './defines';
@Injectable()
export class User {
    constructor( private base: Base ) {

    }




    /**
     * 
     * 
     * 
     * 
     * @code example of login.
         onClickLogin() {
            console.log(this.id);
            console.log(this.password);
            let data: USER_LOGIN_REQUEST_DATA = {
                id: this.id,
                password: this.password
            };
            this.user.login( data, (re: USER_LOGIN_REPONSE_DATA) => {
                console.log( 'session id: ', re.data.session_id );
            },
            error => console.error(error),
            () => console.info('complete'));
        }
     * @endcode
     */
    
    login( req: USER_LOGIN_REQUEST_DATA, success: (res: USER_LOGIN_REPONSE_DATA) => void, failure?: ( error: string ) => void, complete?: () => void ) {

        req.mc="user.login";

        this.base.post( req, (res) => {
            this.setSessionId( res );
            success( res );
        }, failure, complete );

    }


    logout( success: (res: USER_LOGIN_REPONSE_DATA) => void, failure?: ( error: string ) => void, complete?: () => void ) {

        let req: USER_LOGOUT_REQUEST_DATA = {
            mc: 'user.logout',
            session_id: this.getSessionId()
        };
        
        this.base.post( req, (res) => {
            this.deleteSessionId();
            success( res );
        }, failure, complete );

    }





    setSessionId( res: USER_LOGIN_REPONSE_DATA ) {
        localStorage.setItem( KEY_SESSION_ID, res.data.session_id );
    }
    getSessionId() : string {
        return localStorage.getItem( KEY_SESSION_ID );
    }

    deleteSessionId() {
        localStorage.removeItem( KEY_SESSION_ID );
    }
    isLogin() : boolean {
        if ( this.getSessionId() ) return true;
        else return false;
    }
}