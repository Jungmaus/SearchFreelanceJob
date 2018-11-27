import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { WorkService } from '../../services/work.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private workService: WorkService;
  q: string = '';

  constructor(route: ActivatedRoute) {
    this.q = route.snapshot.params['q'];
    this.workService = new WorkService();
  }

  ngOnInit() {
  }

}
