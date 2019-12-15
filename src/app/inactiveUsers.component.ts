import {Component, OnInit} from '@angular/core';
import {UserService} from "./user.service";

@Component({
    selector: 'inactive-comp',
    template: `<table>
        <tr *ngFor="let item of items,let i = index">
            <td>{{item}}</td> <td><button (click)="change(i)">SetToActive</button></td>
        </tr>
    </table>`
})
export class InactiveUsersComponent implements OnInit{
    items: string[] = [];
    constructor(private userService: UserService){}

    addItem(name: string){

        this.userService.addInactive(name);
    }
    change(index:number){
        this.userService.change(index,'inactive');

    }
    ngOnInit(){
        this.items = this.userService.getInactive();
    }
}

