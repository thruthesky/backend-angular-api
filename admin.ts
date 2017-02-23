import { Base } from './base';
import { User } from './user';
import { ADMIN_USER_SEARCH_REQUEST_DATA, ADMIN_USER_SEARCH_RESPONSE_DATA } from './interface';

export class Admin {

    constructor( private base: Base, private user: User ) {}

    search( req: ADMIN_USER_SEARCH_REQUEST_DATA, success: ( res: ADMIN_USER_SEARCH_RESPONSE_DATA ) => void, failure?: ( error: string ) => void, complete?: () => void ) {
        req.mc = 'user.search';
        req.session_id = this.user.getSessionId();

        this.base.post( req, (res) => {
            success( res );
        }, failure, complete );
    }
}