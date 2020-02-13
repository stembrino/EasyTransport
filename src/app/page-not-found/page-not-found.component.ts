import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <nz-result nzStatus="404" nzTitle="404" nzSubTitle="Desculpas, está pagina não existe ou nao está disponível">
      <div nz-result-extra>
        <button routerLink='/home' nz-button nzType="primary">Back Home</button>
      </div>
    </nz-result>
  `,
  styles: ['nz-result {padding: 0;} nz-result>div{margin: 0;}']
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
