import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { LayoutComponent } from './layout/layout.component';
import { MainContentComponent } from './main-content/main-content.component';
import { OrderComponent } from './order/order.component';
import { OrderService } from './services/order.service';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { WhoamiComponent } from './enterprise/whoami/whoami.component';
import { PartnersProjectsComponent } from './enterprise/partners-projects/partners-projects.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalVerifyComponent } from './order/modal-verify/modal-verify.component';
import { ResultSreenComponent } from './result-sreen/result-sreen.component';
import { CardAddressComponent } from './components/card-address/card-address.component';
import { CardResultComponent } from './components/card-result/card-result.component';
import { AuthGuardService } from './services/guard/auth-guard.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MainContentComponent,
    OrderComponent,
    EnterpriseComponent,
    WhoamiComponent,
    PartnersProjectsComponent,
    ModalVerifyComponent,
    ResultSreenComponent,
    CardAddressComponent,
    CardResultComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }, OrderService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
