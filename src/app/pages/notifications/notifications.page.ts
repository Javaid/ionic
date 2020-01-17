import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: "app-notifications",
  templateUrl: "./notifications.page.html",
  styleUrls: ["./notifications.page.scss"]
})
export class NotificationsPage implements OnInit {
  cards: any;
  category: string = "gear";

  constructor(public navCtrl: NavController) {
    this.cards = new Array(10);
  }

  ngOnInit() {}
}
