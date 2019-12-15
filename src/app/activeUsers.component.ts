import {Component, OnInit} from '@angular/core';
import {UserService} from "./user.service";

@Component({
    selector: 'active-comp',
    template: `
        <table>
            <tr *ngFor="let item of items,let i = index">
                <td>{{item}}</td> <td><button (click)="change(i)">SetToInactive</button></td>
            </tr>
        </table>`
})
export class ActiveUsersComponent implements OnInit{
    items: string[] = [];
    constructor(private userService: UserService){}

    addItem(name: string){

        this.userService.addActive(name);
    }
    change(index:number){
        this.userService.change(index,'active');

    }
    ngOnInit(){
        this.items = this.userService.getActive();
    }
}

