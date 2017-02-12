import { Injectable } from '@angular/core';
import { User } from '../user';
import { USER_REGISTER_REQUEST_DATA, USER_LOGIN_REQUEST_DATA } from '../interface';

const NEW_USER_DATA = 'new-update';
@Injectable()

export class UserTest {


    constructor( private user: User ) {}

    run() {
        this.singleUserTest();
    }

    singleUserTest() {
        this.register();
        this.logout();
        this.login();
        this.update();
        this.logout();
    }

    randomString() : string {
        return  ( new Date ).getMinutes() + ( new Date ).getSeconds() + '';
    }

    randomData() : USER_REGISTER_REQUEST_DATA {
        let randomstring = this.randomString();
        let data : USER_REGISTER_REQUEST_DATA  = {};
        data.id = randomstring;
        data.password = randomstring;
        data.name = randomstring + 'name';
        data.nickname = randomstring + 'nickname';
        data.mobile = '09123456789';
        data.address = randomstring + 'address';
        data.email = randomstring + '@gmail.com';
        return data;
    }

    register() {
        let userdata = this.randomData();
        this.user.register( userdata, res =>{
            console.info( ' res UserTest :: REGISTER:: ' + res );
        }, err =>{}, ()=>{})

    }

    logout() {
        this.user.logout ( res =>{
            if( this.user.isLogin() == false) console.info('USER LOGOUT TEST: SUCCESS') ;
            else console.error('USER LOGOUT TEST: FAILED');
        }, error => console.error('USER LOGOUT TEST: ERROR: ' + error ) );
    }

    login() {
        let data : USER_LOGIN_REQUEST_DATA = {};
        data.id = this.randomString();
        data.password = this.randomString();
        this.user.login( data , res =>{
            if( this.user.isLogin() == true ) console.log('USER LOGIN TEST: SUCCESS');
            else console.error('USER LOGIN TEST: FAILED');
        }, error => console.error('USER LOGIN TEST: ERROR'));
    }

    update() {
        let data = this.randomData();
        data.name = this.randomString() + NEW_USER_DATA;
        this.user.update( data , res =>{

        }, error =>{}, () =>{})
    }
}