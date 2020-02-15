import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private orderService: OrderService) { }
  
  public spining = false
  public address = []
  public infoAddress: BehaviorSubject<any> = new BehaviorSubject(null)

  public formOrder = new FormGroup({
    origin: new FormControl('', [Validators.required]),
    destination: new FormControl('', [Validators.required]),
    typeTransport: new FormControl('', [Validators.required]),
    dateDelivery:new FormControl('', [Validators.required])
  })

  ngOnInit() {
    
  }

  public onSubmit(): void {
    if (!this.formOrder.valid) {
      this.formOrder.markAllAsTouched()
      return
    }
    
    //insert in object: Order typetranportation  and date
    this.orderService.order.typeTransport = this.formOrder.value.typeTransport
    this.orderService.order.date = this.formOrder.value.dateDelivery //format the date afterward
    
    this.spining = true
    let { origin, destination } = this.formOrder.value
    this.address = []
    this.orderService.getAdressLocation(origin)
      .subscribe((response: any) => {
        this.address.push({ origin: response })
        this.orderService.getAdressLocation(destination)
          .subscribe((response: any) => {
            this.address.push({ destination: response })
            this.infoAddress.next(this.address)            
            this.orderService.closeOpenModal(true)
            this.spining = false
          })
      })

  }

}
