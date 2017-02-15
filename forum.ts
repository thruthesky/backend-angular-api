import { Injectable } from '@angular/core';
import { Base } from './base';
import {
    FORUM_DATA_REQUEST_DATA,
    FORUM_DATA_RESPONSE_DATA,
    USER_UPDATE_REQUEST_DATA, USER_UPDATE_RESPONSE_DATA
} from './interface';
import { KEY_SESSION_ID } from './defines';
@Injectable()


export class Forum {

    constructor( private base : Base ) {}


    create( req: FORUM_DATA_REQUEST_DATA, success: (res: FORUM_DATA_RESPONSE_DATA ) => void, failure?: ( error: string ) => void, complete?: () => void ) {
        req.mc = 'forum.data.create';

        this.base.post( req, (res) => {
            success( res );
        }, failure, complete );
    }


}