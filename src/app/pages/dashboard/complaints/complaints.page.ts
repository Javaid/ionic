import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.page.html',
  styleUrls: ['./complaints.page.scss'],
})
export class ComplaintsPage implements OnInit {
  complaints = [
    {
      id: "ISO60120-6224952",
      date: "06",
      month: "Jan",
      year: "2020",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
      status: "Closed",
      statussign:"danger"
    },
    {
      id: "ISO60120-6224952",
      date: "22",
      month: "Dec",
      year: "2019",
      title: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      status: "Open",
      statussign:"tertiary"
    },
    {
      id: "ISO63620-6224952",
      date: "12",
      month: "Aug",
      year: "2019",
      title: "Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      status: "In Progress",
      statussign:"tertiary"
    },
    {
      id: "ISO60120-6224952",
      date: "06",
      month: "Jan",
      year: "2019",
      title: "Lorem amet adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
      status: "Open",
      statussign:"success"
    },
    {
      id: "ISO60120-6224952",
      date: "06",
      month: "Jan",
      year: "2019",
      title: "Tempor incididunt ut labore et dolore magna aliqua lorem ipsum dolor sit amet",
      status: "Relief Granted",
      statussign:"success"
    },
    {
      id: "ISO60120-6224952",
      date: "06",
      month: "Jan",
      year: "2019",
      title: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
      status: "Open",
      statussign:"warning"
    },
    {
      id: "ISO63620-6224952",
      date: "12",
      month: "Aug",
      year: "2019",
      title: "Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      status: "In Progress",
      statussign:"success"
    },
    {
      id: "ISO60120-6224952",
      date: "06",
      month: "Jan",
      year: "2019",
      title: "Lorem amet adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
      status: "Open",
      statussign:"warning"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
