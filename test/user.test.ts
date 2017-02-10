import { Injectable } from '@angular/core';
import { User } from '../user';

@Injectable()

export class UserTest {


    constructor( private user: User ) {}

    run() {
        this.singleUserTest();
    }

    singleUserTest() {

    }


    register() {}

    logout() {}

    login() {}

    update() {}
}