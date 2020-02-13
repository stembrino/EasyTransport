import {CanActivate, Router} from "@angular/router";
import { Injectable } from "@angular/core";
import { OrderService } from '../order.service';

@Injectable()
export class AuthGuardService implements CanActivate{

    constructor(private orderService: OrderService, private router: Router){}

    public canActivate():boolean{
        const ableToOpen = this.orderService.getRouterGuardResult()
        if(!ableToOpen)
            this.router.navigateByUrl('/not-found')
        return ableToOpen
    }
}