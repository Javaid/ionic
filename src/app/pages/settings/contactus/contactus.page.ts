import { Component, OnInit } from '@angular/core';


@Component({
  selector: "app-contactus",
  templateUrl: "./contactus.page.html",
  styleUrls: ["./contactus.page.scss"]
})
export class ContactusPage implements OnInit {
  lang: any;
  languages: any = [
    "Password Reset  پاس ورڈ دوبارہ ترتیب دیں",
    "Portuguese",
    "French"
  ];
  constructor() {}

  ngOnInit() {}
}
