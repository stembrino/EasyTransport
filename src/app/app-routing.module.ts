import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainContentComponent } from 'src/app/main-content/main-content.component';
import { OrderComponent } from 'src/app/order/order.component'
import { EnterpriseComponent } from 'src/app/enterprise/enterprise.component'
import { ResultSreenComponent } from 'src/app/result-sreen/result-sreen.component'
import { AuthGuardService } from './services/guard/auth-guard.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: MainContentComponent },
  { path: 'order', component: OrderComponent },
  { path: 'enterprise/:opc', component: EnterpriseComponent },
  { path: 'result', component: ResultSreenComponent, canActivate: [AuthGuardService] },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
