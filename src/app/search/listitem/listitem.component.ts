import { Component, OnInit } from '@angular/core';

import ListItem from '../../../models/search/listItem';

@Component({
  selector: 'app-listitem',
  templateUrl: './listitem.component.html',
  styleUrls: ['./listitem.component.css',
  '../../../bootstrap/bootstrap.min.css']
})
export class ListitemComponent implements OnInit {

  _model: ListItem;

  constructor(model: ListItem) {
    console.log(model);
    this._model = model;
   }

  ngOnInit() {
  }

}
