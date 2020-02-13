import { Injectable } from '@angular/core'
import { Observable, BehaviorSubject } from 'rxjs'
import { HttpClient } from '@angular/common/http'


@Injectable()
export class OrderService {

    constructor(private http: HttpClient) { }

    public isVisible: BehaviorSubject<boolean> = new BehaviorSubject(false)
    public durationTravel:BehaviorSubject<any> = new BehaviorSubject(null)
    private authGuardResult:boolean = false

    private URL_API_LOCATION = 'https://infinite-fortress-93137.herokuapp.com/location?address='
    private URL_API_DISTANCE = 'https://infinite-fortress-93137.herokuapp.com/distance?'

    public closeOpenModal(opc: boolean): any {
        this.isVisible.next(opc)
    }
    public getAdressLocation(address): Observable<any> {
        return this.http.get(this.URL_API_LOCATION + address)
    }

    public getDistance(origin: string, destination: string) {
        return this.http.get(this.URL_API_DISTANCE+`origin=${origin}&destination=${destination}`)
    }

    public setRouterGuarResult(valid:boolean):void{
        this.authGuardResult = valid        
    }
    public getRouterGuardResult():boolean{
        return this.authGuardResult
    }
}