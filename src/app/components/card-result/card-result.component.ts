import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-result',
  templateUrl: './card-result.component.html',
  styleUrls: ['./card-result.component.css']
})
export class CardResultComponent implements OnInit {

  @Input() public time: any
  @Input() public distance: any
  @Input() public price: any
  constructor() { }

  ngOnInit() {
  }

}
