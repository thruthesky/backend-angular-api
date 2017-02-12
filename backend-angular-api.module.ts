import { NgModule } from '@angular/core';
import { User } from './user';
import { Base } from './base';
import { UserTest } from './test/user.test';
import { BaseTest } from './test/base.test';
@NgModule({
    providers: [ Base, User, UserTest, BaseTest ]
})
export class BackendAngularApiModule {}