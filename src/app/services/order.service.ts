import { Injectable } from '@angular/core'
import { Observable, BehaviorSubject } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { Order } from '../Model/Order'


@Injectable()
export class OrderService {

    public isVisible: BehaviorSubject<boolean> = new BehaviorSubject(false)
    public durationTravel: BehaviorSubject<any> = new BehaviorSubject(null)
    private authGuardResult: boolean = false
    public order: Order

    private URL_API_LOCATION = 'https://infinite-fortress-93137.herokuapp.com/location?address='
    private URL_API_DISTANCE = 'https://infinite-fortress-93137.herokuapp.com/distance?'

    constructor(private http: HttpClient) {
        this.order = new Order()
    }

    public closeOpenModal(opc: boolean): any {
        this.isVisible.next(opc)
    }
    public getAdressLocation(address): Observable<any> {
        return this.http.get(this.URL_API_LOCATION + address)
    }

    public getDistance(origin: string, destination: string) {
        return this.http.get(this.URL_API_DISTANCE + `origin=${origin}&destination=${destination}`)
    }

    public setRouterGuarResult(valid: boolean): void {
        this.authGuardResult = valid
    }
    public getRouterGuardResult(): boolean {
        return this.authGuardResult
    }

    public calculatePrice() {
        
        const consA: number = 0.084
        const consB: number = 0.103 
        const consC: number = 0.127
        
        switch(this.order.typeTransport){
            case 'Categoria A':
                return this.helpCalculatePrice(consA)            
            case 'Categoria B':
                 return this.helpCalculatePrice(consB)            
            case 'Categoria C': 
                return this.helpCalculatePrice(consB)  
        }

    }

    public helpCalculatePrice(cons):number{
        const PRICE_GAS: number = 1.55
        return this.roundNumber((this.order.distance/1000) * cons * PRICE_GAS * 2 * 5.76)
    }

    public roundNumber(num):number{
        return Math.round(num * 100) / 100
    }


}