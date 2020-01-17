import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: "",
    component: MenuPage,
    children: [
      {
        path: "s",
        loadChildren: () =>
          import("../first/first.module").then(m => m.FirstPageModule)
      },
      {
        path: "",
        loadChildren: () =>
          import("../dashboard/dashboard.module").then(
            m => m.DashboardPageModule
          )
      },
      {
        path: "team",
        loadChildren: () =>
          import("../settings/team/team.module").then(m => m.TeamPageModule)
      },
      {
        path: "contactus",
        loadChildren: () =>
          import("../settings/contactus/contactus.module").then(
            m => m.ContactusPageModule
          )
      },
      {
        path: "username",
        loadChildren: () =>
          import("../settings/username/username.module").then(
            m => m.UsernamePageModule
          )
      },
      {
        path: "manual",
        loadChildren: () =>
          import("../settings/manual/manual.module").then(
            m => m.ManualPageModule
          )
      }
    ]
  },
  {
    path: "",
    redirectTo: "/menu/first"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
