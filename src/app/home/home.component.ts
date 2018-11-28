import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css',
  '../../bootstrap/bootstrap.min.css']
})
export class HomeComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  search(searchText): void {
    if(searchText && searchText.length <= 30){
    console.log("Search request for => "+searchText);
    this.router.navigate([`search/${searchText}`]);
    }
  }

}
