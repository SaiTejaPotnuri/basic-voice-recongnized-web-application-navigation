import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DPEComponent } from './components/dpe/dpe.component';
import { PGTComponent } from './components/pgt/pgt.component';
import { SeamlessAssistComponent } from './components/seamless-assist/seamless-assist.component';
import { StackEnableComponent } from './components/stack-enable/stack-enable.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dpe',
    pathMatch: 'full',
  },
  {
    path: 'dpe',
    component: DPEComponent,
  },
  {
    path: 'pgt',
    component: PGTComponent,
  },
  {
    path: 'seamless-assist',
    component: SeamlessAssistComponent,
  },
  {
    path: 'stack-enable',
    component: StackEnableComponent,
  },
  {
    path: '**',
    redirectTo: 'dpe',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
