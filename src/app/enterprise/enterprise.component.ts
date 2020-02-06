import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-enterprise',
  templateUrl: './enterprise.component.html',
  styleUrls: ['./enterprise.component.css']
})
export class EnterpriseComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  public opc = null

  ngOnInit() {
    this.route.params.subscribe((param)=> this.opc = param.opc)
  }

  
}
