import { Injectable } from '@angular/core';
import { Base } from './base';
import { User } from './../backend-angular-api/user';
import {
    FORUM_DATA_REQUEST_DATA,
    FORUM_DATA_RESPONSE_DATA,
    USER_UPDATE_REQUEST_DATA, 
    USER_UPDATE_RESPONSE_DATA,
    FORUM_DATA_UPDATE_REQUEST_DATA,
    FORUM_DATA_UPDATE_RESPONSE_DATA,
    FORUM_DATA_DELETE_REQUEST_DATA,
    FORUM_DATA_DELETE_RESPONSE_DATA,
    FORUM_DATA_GETS_REQUEST_DATA,
    FORUM_DATA_GETS_RESPONSE_DATA,
    FORUM_CONFIG_REQUEST_DATA,
    FORUM_CONFIG_RESPONSE_DATA

    
} from './interface';
import { KEY_SESSION_ID } from './defines';
@Injectable()


export class Forum {

    constructor( private base : Base, private user: User ) {
        
    }


    createForumData( req: FORUM_DATA_REQUEST_DATA, success: (res: FORUM_DATA_RESPONSE_DATA ) => void, failure?: ( error: string ) => void, complete?: () => void ) {
        req.mc = 'forum.data.create';
        req.session_id = this.user.getSessionId();


        this.base.post( req, (res) => {
            success( res );
        }, failure, complete );
    }


    editForumData( req: FORUM_DATA_UPDATE_REQUEST_DATA, success: ( res: FORUM_DATA_UPDATE_RESPONSE_DATA ) => void, failure?:( error: string ) => void, complete?: () => void ) {
        req.mc = 'forum.data.edit';
        req.session_id = this.user.getSessionId();

        this.base.post( req, (res) => {
            success( res );
        }, failure, complete );
    }

    deleteForumData( req: FORUM_DATA_DELETE_REQUEST_DATA, success: ( res: FORUM_DATA_DELETE_REQUEST_DATA ) => void, failure?:( error: string ) => void, complete?: () => void ) {
        req.mc = 'forum.data.delete';
        req.session_id = this.user.getSessionId();

        this.base.post( req, (res) => {
            success( res );
        }, failure, complete );
    }

    getsForumData( req: FORUM_DATA_GETS_REQUEST_DATA, success: ( res: FORUM_DATA_GETS_RESPONSE_DATA) => void, failure?: (error: string) => void, complete?: () => void ) {
        req.mc = 'forum.data.gets';

        this.base.post( req, (res) => {
            success( res );
        }, failure, complete );
    }

    createForumConfig( req: FORUM_CONFIG_REQUEST_DATA, success: (res: FORUM_CONFIG_RESPONSE_DATA) => void, failure?: ( error: string) =>void, complete?: () => void) {
        req.mc = 'forum.config.create';

        this.base.post( req, (res) => {
            success( res );
        }, failure, complete );
    }




}