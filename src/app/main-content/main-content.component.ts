import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  constructor() { }

  public homeItems:any = [
    {
      title: 'Simular',
      image: 'https://img.icons8.com/plasticine/100/000000/compass.png',
      navigation: '/order'      
    },
    
  ]
  private screenWidth:string = screen.width < 600? '100%' : `${(100/this.homeItems.length)}%`
  public gridStyle = {
    width: this.screenWidth,
    textAlign: 'center',
    padding: '24px 0 24px 0'
  };

  ngOnInit() {
  }

}
