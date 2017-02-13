import { Injectable } from '@angular/core';
import { UserTest } from './user.test';
import { BaseTest } from './base.test';

@Injectable()

export class Test {

    constructor(
        private baseTest : BaseTest,
        private userTest : UserTest
    ) {}

    all() {
        this.userTest.run();
    }
}