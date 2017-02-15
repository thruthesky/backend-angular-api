
import { NgModule } from '@angular/core';
import { User } from './user';
import { Base } from './base';
import { Forum } from './forum';
@NgModule({
    providers: [ Base, User, Forum ]
})
export class BackendAngularApiModule {}