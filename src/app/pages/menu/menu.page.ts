import { Component, OnInit } from "@angular/core";
import { Router, RouterEvent } from "@angular/router";
import { MenuController } from "@ionic/angular";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.page.html",
  styleUrls: ["./menu.page.scss"]
})
export class MenuPage implements OnInit {
  pages = [
    {
      title: "Profile",
      url: "/home/profile",
      icon: "person"
    },
    {
      title: "Change Password",
      url: "/home/settings/username",
      icon: "finger-print"
    },
    {
      title: "change username",
      url: "/home/settings/username",
      icon: "man"
    },
    {
      title: "change email",
      url: "/home/settings/username",
      icon:"mail"
    },
    {
      title: "contact us",
      url: "/home/settings/contactus",
      icon:'contacts'
    },
    {
      title: "team credit",
      url: "/home/settings/team",
      icon:'cash'
    },
    {
      title: "citizen manual",
      url: "/home/settings/manual",
      icon:"book"
    },
    {
      title: " privacy policy",
      url: "/home/settings/privacy",
      icon:"man"
    },
    {
      title: "logout",
      url: "/login",
      icon:"log-out"
    }
  ];
  selectedPath = "";
  constructor(private router: Router, private mnuCtrl: MenuController) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });
  }

  ngOnInit() {}
}
