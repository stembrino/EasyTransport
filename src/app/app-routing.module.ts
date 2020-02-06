import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainContentComponent }  from 'src/app/main-content/main-content.component';
import { OrderComponent } from 'src/app/order/order.component'
import { EnterpriseComponent } from 'src/app/enterprise/enterprise.component'
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: MainContentComponent },
  { path: 'order', component: OrderComponent},
  { path: 'enterprise/:opc', component: EnterpriseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
