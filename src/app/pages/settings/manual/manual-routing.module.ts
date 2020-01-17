import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManualPage } from './manual.page';
import { ComponentsModule } from 'src/app/components/components.module';

const routes: Routes = [
  {
    path: '',
    component: ManualPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, ComponentsModule],
})
export class ManualPageRoutingModule {}
