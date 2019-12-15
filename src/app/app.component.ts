import {Component, ViewChild} from '@angular/core';
import {ActiveUsersComponent} from "./activeUsers.component";
import {InactiveUsersComponent} from "./inactiveUsers.component";

@Component({
    selector: 'my-app',
    template: `<div class="panel">
        <div><input [(ngModel)]="name" placeholder = "Name" />
            <select #lol>
                <option value="Inactive">Inactive</option>
                <option value="Active">Active</option>
            </select>
            
            <button (click)="addItem(name,lol.value)">Add</button>
        </div>
        <inactive-comp></inactive-comp>
        <active-comp></active-comp>
    </div>`
})
export class AppComponent {
    name="";
    @ViewChild(InactiveUsersComponent, {static: false})
    private inactiveUsers: InactiveUsersComponent;
    @ViewChild(ActiveUsersComponent, {static: false})
    private activeUsers: ActiveUsersComponent;

    addItem(name:string,status:string):void{
        status=status.toLowerCase();
        if (name!='') {
            if (status == 'inactive') {
                this.inactiveUsers.addItem(name);
            }
            if (status == "active") {
                this.activeUsers.addItem(name);
            }
        }

    }
}

