import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SummaryComponent } from './summary.component';

const routes: Routes = [
  {
    path: '',
    component: SummaryComponent,
    loadChildren: () => import('./summary.module').then((m) => m.SummaryModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SummaryRoutingModule {}
