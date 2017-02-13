import { Injectable } from '@angular/core';
import { User } from '../user';
import {
    USER_REGISTER_REQUEST_DATA,
    USER_LOGIN_REQUEST_DATA,
    USER_FIELDS,
    USER_UPDATE_REQUEST_DATA
} from '../interface';

const NEW_USER_DATA = 'new-update';
@Injectable()

export class UserTest {


    constructor( private user: User ) {}

    run() {
        this.singleUserTest();
    }

    singleUserTest() {
        this.register( () =>{
            this.logout( () =>{
                this.login( () =>{
                    this.update( () =>{
                        this.logout(  ()=>{
                            console.info('Success logout test');
                        }, fail =>{
                            console.error('LOGOUT TEST FAILED');
                        }, ()=>{
                            console.info('Single User Test Finished.');
                        })
                    });
                });
            });
        });

    }

    randomString() : string {
        return  ( new Date ).getMinutes() + ( new Date ).getSeconds() + '';
    }

    randomData() : USER_FIELDS {
        let randomstring = this.randomString();
        let data : USER_REGISTER_REQUEST_DATA  = {};
        data.name = randomstring + 'name';
        data.nickname = randomstring + 'nickname';
        data.mobile = '09123456789';
        data.address = randomstring + 'address';
        data.email = randomstring + '@gmail.com';
        return data;
    }

    register( callback ) {
        let userdata: USER_REGISTER_REQUEST_DATA = this.randomData();
        userdata.id = this.randomString();
        userdata.password = this.randomString();
        this.user.register( userdata, res =>{
            console.info( ' res UserTest :: REGISTER:: ' + res );
            callback();
        }, err =>{}, ()=>{})

    }

    logout( success, failure?, complete?) {
        this.user.logout ( res =>{
            if( this.user.isLogin() == false) {
                console.info('USER LOGOUT TEST: SUCCESS');
                success();
                if ( complete ) complete();
            }
            else {
                console.error('USER LOGOUT TEST: FAILED');
                failure();
                if ( complete ) complete();
            }

        }, error => console.error('USER LOGOUT TEST: ERROR: ' + error ) );
    }

    login( callback ) {
        let data : USER_LOGIN_REQUEST_DATA = {};
        data.id = this.randomString();
        data.password = this.randomString();
        this.user.login( data , res =>{
            if( this.user.isLogin() == true ) {
                console.log('USER LOGIN TEST: SUCCESS');
                callback();
            }
            else console.error('USER LOGIN TEST: FAILED');
        }, error => console.error('USER LOGIN TEST: ERROR', error));
    }

    update( callback ) {
        let data : USER_UPDATE_REQUEST_DATA = this.randomData();
        data.name = this.randomString() + NEW_USER_DATA;
        this.user.update( data , res =>{
            callback();
        }, error =>{}, () =>{})
    }
}