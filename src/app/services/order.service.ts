import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpClient, HttpRequest, HttpEventType } from '@angular/common/http'
import { HttpHeaders } from '@angular/common/http';


@Injectable()
export class OrderService {

    constructor(private http: HttpClient) { }

    private URL_API = 'https://www.arcgis.com/sharing/rest/oauth2/token'

    

    public getTokenAPI(): void {
        let body: any = {
            'client_id': 'DnYSksDp6TttvsoK',
            'client_secret': 'd2ba2c7148ee411e949f748cfb4cda80',
            'grant_type': 'client_credentials'
        }
        const httpOptions = {
            headers: new HttpHeaders({
                "Content-Type": "application/x-www-form-urlencoded",
                "accept": "application/json"
            })
        };

        this.http.post(this.URL_API, body)
            .subscribe(response => {
                console.log(response)
            })


    }
}