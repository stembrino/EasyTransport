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
import { SidebarContentComponent } from './layout/sidebar-content/sidebar-content.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { WhoamiComponent } from './enterprise/whoami/whoami.component';
import { PartnersProjectsComponent } from './enterprise/partners-projects/partners-projects.component';


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MainContentComponent,
    OrderComponent,
    SidebarContentComponent,
    EnterpriseComponent,
    WhoamiComponent,
    PartnersProjectsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }, OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
