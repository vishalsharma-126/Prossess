import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductionSeuComponent } from './components/production-seu/production-seu.component';
import { DevelopmentComponent } from './components/development/development.component';
import { AcceptanceSeuComponent } from './components/acceptance-seu/acceptance-seu.component';
import { InformationComponent } from './components/information/information.component'




const routes: Routes = [
 /* {
    path: '',
    redirectTo: 'production-seu',
    pathMatch: 'full'
  },*/
  {
    path: 'production-seu',
    component: ProductionSeuComponent
  },

  {
    path: 'acceptance-seu',
    component: AcceptanceSeuComponent
  },
  {
    path: 'development',
    component: DevelopmentComponent
  },
  {
    path: 'information',
    component: InformationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
