import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css',
  '../../bootstrap/bootstrap.min.css']
})
export class HeaderComponent implements OnInit {


  constructor(public router: Router) { }

  ngOnInit() {
  }

  search(searchq: string): void {
    if(searchq && searchq.length <= 30){
    console.log("Search wanted for => "+searchq);
    this.router.navigate([`search/${searchq}`]);
    }
  }

}
