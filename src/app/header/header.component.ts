import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css',
  '../../bootstrap/bootstrap.min.css']
})
export class HeaderComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  search(searchq): void {
    console.log("Search wanted for => "+searchq);
  }

}
