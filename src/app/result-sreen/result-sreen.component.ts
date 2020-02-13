import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-result-sreen',
  templateUrl: './result-sreen.component.html',
  styleUrls: ['./result-sreen.component.css']
})
export class ResultSreenComponent implements OnInit, OnDestroy {

  public addressOrigin: string
  public addressDestination: string
  public informations: any

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.durationTravel
      .subscribe((response: any) => {
        console.log(response)
        if (response) {
          this.informations = response.rows[0].elements[0]
          this.addressDestination = response.destination_addresses[0]
          this.addressOrigin = response.origin_addresses[0]
          console.log(this.informations)
        }
      })

  }

  ngOnDestroy(): void {
    this.orderService.setRouterGuarResult(false)
  }

}
