import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';

@Component({
  selector: "app-settings",
  templateUrl: "./settings.page.html",
  styleUrls: ["./settings.page.scss"]
})
export class SettingsPage implements OnInit {
  constructor(public router: NavController) {}

  ngOnInit() {}
  editProfile() {
    this.router.navigateForward(["/home/profile"]);
  }
  settingNavigate(opt:any){
   
    this.router.navigateForward(["/home/settings/"+opt]);
  }
  teamCredit(){
    
  }

  logout() {
    this.router.navigateRoot(["/login"]);
  }
}
