import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import {InactiveUsersComponent} from "./inactiveUsers.component";
import {ActiveUsersComponent} from "./activeUsers.component";
import {UserService} from "./user.service";
import {LogService} from "./log.service";

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ AppComponent,InactiveUsersComponent,ActiveUsersComponent ],
    providers:[UserService,LogService],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
