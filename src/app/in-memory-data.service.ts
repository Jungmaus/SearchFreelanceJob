import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const supportRequests = [
      { name: 'Samet', surname: 'Senturk', email: 'sametsenturkkk@outlook.com', title: 'Test', message: 'Test Message', addDate: '' }
    ];
    return supportRequests;
  }

  constructor() { }
}
