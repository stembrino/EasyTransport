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
  public price: any

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.durationTravel
      .subscribe((response: any) => {
        if (response) {
          this.orderService.order.destination = response.destination_addresses[0]
          this.orderService.order.origin = response.origin_addresses[0]
          this.orderService.order.distance = response.rows[0].elements[0].distance.value
          this.orderService.order.price = this.orderService.calculatePrice()
          this.price = this.orderService.order.price
          this.informations = response.rows[0].elements[0]
          this.addressDestination = response.destination_addresses[0]
          this.addressOrigin = response.origin_addresses[0]
        }
      })

  }

  ngOnDestroy(): void {
    this.orderService.setRouterGuarResult(false)
  }

}
