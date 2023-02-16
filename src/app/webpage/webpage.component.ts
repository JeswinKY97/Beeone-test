import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-webpage',
  templateUrl: './webpage.component.html',
  styleUrls: ['./webpage.component.scss']
})
export class WebpageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openNav() {
    document.getElementById('mySidenav').style.width = "100vw";
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
}
