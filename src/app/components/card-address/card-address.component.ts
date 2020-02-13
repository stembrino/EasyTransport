import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-address',
  templateUrl: './card-address.component.html',
  styleUrls: ['./card-address.component.css']
})
export class CardAddressComponent implements OnInit {  

  @Input() public addressOrigin: string
  @Input() public addressDestination: string

  constructor() { }
  
  ngOnInit() {
  }

}
