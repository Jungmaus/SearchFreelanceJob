import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { WorkService } from '../../services/work.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css',
  '../../bootstrap/bootstrap.min.css']
})
export class SearchComponent implements OnInit {

  private workService: WorkService;
  q: string = '';
  notFound:boolean;

  constructor(route: ActivatedRoute) {
    this.q = route.snapshot.params['q'];
    this.workService = new WorkService();
    this.notFound = false;
  }

  ngOnInit() {
  }

  search(searchq: string): void {
    if(searchq && searchq.length <= 30)
    console.log(`Search request for => ${searchq}`);
  }

}
