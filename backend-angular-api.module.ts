
import { NgModule } from '@angular/core';
import { User } from './user';
import { Base } from './base';
import { Forum } from './forum';
import { Admin } from './admin';
@NgModule({
    providers: [ Base, User, Forum, Admin ]
})
export class BackendAngularApiModule {}