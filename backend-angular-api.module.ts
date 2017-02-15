
import { NgModule } from '@angular/core';
import { User } from './user';
import { Base } from './base';
@NgModule({
    providers: [ Base, User ]
})
export class BackendAngularApiModule {}