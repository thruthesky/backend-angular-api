import { Injectable } from '@angular/core';
import { Base } from './base';
import { User } from './user';
import { USER_DATA_REQUEST_DATA, USER_DATA_RESPONSE_DATA, ADMIN_USERS_LIST_REQUEST_DATA } from './interface';

@Injectable()
export class Admin{

    constructor( private base: Base, 
                 private user: User ){

    }
    
    // getAdminId( success: ( res: string  ) => void, failure: ( error: string ) => void, complete?: () => void ){
    //     if( this.user.isLogin() == false ) return 
    // }

    isAdmin( id ) : boolean {
        if ( id == "admin" ) return true;
        else return false
    }

    getUserList( req: ADMIN_USERS_LIST_REQUEST_DATA , success: ( res: any ) => void, failure: ( error: string ) => void, complete: () => void ){
        req.mc = 'user.search';

        this.base.post( req, res =>{
            success( res );
        }, failure,
        complete)
    }


}