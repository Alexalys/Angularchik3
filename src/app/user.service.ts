import {Injectable} from "@angular/core";
import {LogService} from "./log.service";

@Injectable()
export class UserService{
    constructor(private logService:LogService) {}
    private inactive: string[]=[];
    private active:string[]=[];
    getActive(): string[] {

        return this.active;
    }
    addActive(name: string){

        this.active.push(name);
    }
    getInactive(): string[] {

        return this.inactive;
    }
    addInactive(name: string){

        this.inactive.push(name);
    }
    change(index:number,type:string){
        this.logService.count+=1;
        this.logService.write();
        if(type=='inactive'){
            this.active.push(this.inactive[index]);
            this.inactive.splice(index,1);
        }
        if(type=='active'){
            this.inactive.push(this.active[index]);
            this.active.splice(index,1);

        }

    }
}
