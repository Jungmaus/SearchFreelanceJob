import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { WorkService } from '../../services/work.service';
import ListItem from 'src/models/search/listItem';

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

  listItem: ListItem[] = [
    {id:'asd123', title:'title', job_status:'jobStatus', job_type:'jobType', category:'category', date_created:'08.06.2000', skills:['.net','php'], url:'www.upwork.com'}
  ];

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
