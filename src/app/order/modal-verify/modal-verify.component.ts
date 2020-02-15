import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { OrderService } from 'src/app/services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-verify',
  templateUrl: './modal-verify.component.html',
  styleUrls: ['./modal-verify.component.css']
})
export class ModalVerifyComponent implements OnInit {

  constructor(private orderService: OrderService, private router: Router) { }

  public isVisible: boolean = false
  public addressOrigin: string = ''
  public addressDestination: string = ''
  public locations = []
  public isConfirmLoading = false;
  @Input() infoAddress: BehaviorSubject<any>

  ngOnInit() {
    this.infoAddress.subscribe((response: any) => {
      if (response) {
        this.addressOrigin = response[0].origin[0].address
        this.addressDestination = response[1].destination[0].address
        this.locations.push(response[0].origin[1].cordanates, response[1].destination[1].cordanates)
      }
    })
    this.orderService.isVisible.subscribe((response: boolean) => this.isVisible = response)
  }

  public handleOk(): void {
    this.isConfirmLoading = true
    let origin = `${this.locations[0].lat},${this.locations[0].lng}`
    let destination = `${this.locations[1].lat},${this.locations[1].lng}`
    
    this.orderService.getDistance(origin, destination)
      .subscribe((response: any) => {
        this.orderService.durationTravel.next(response)
        this.orderService.closeOpenModal(false)
        this.isConfirmLoading = false
        this.orderService.setRouterGuarResult(true)
        this.router.navigateByUrl('/result')
      })

  }

  public handleCancel(): void {
    this.orderService.closeOpenModal(false)
  }

}
