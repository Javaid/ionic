import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomePage } from "./home.page";

const routes: Routes = [
  {
    path: "home",
    component: HomePage,
    children: [
      {
        path: "menu",
        loadChildren: () =>
          import("../pages/menu/menu.module").then(m => m.MenuPageModule)
      },
      {
        path: "dashboard",
        loadChildren: () =>
          import("../pages/dashboard/dashboard.module").then(
            m => m.DashboardPageModule
          )
      },
      {
        path: "feed",
        loadChildren: () =>
          import("../pages/feed/feed.module").then(m => m.FeedPageModule)
      },
      {
        path: "notifications",
        loadChildren: () =>
          import("../pages/notifications/notifications.module").then(
            m => m.NotificationsPageModule
          )
      },
      {
        path: "messages",
        loadChildren: () =>
          import("../pages/messages/messages.module").then(
            m => m.MessagesPageModule
          )
      },
      {
        path: "settings",
        loadChildren: () =>
          import("../pages/settings/settings.module").then(
            m => m.SettingsPageModule
          )
      },
      {
        path: "profile",
        loadChildren: () =>
          import("../pages/profile/profile.module").then(
            m => m.ProfilePageModule
          )
      },
      {
        path: "manual",
        loadChildren: () =>
          import("../pages/settings/manual/manual.module").then(
            m => m.ManualPageModule
          )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
