import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import Work from 'src/models/work';

@Injectable({
  providedIn: 'root'
})
export class WorkService {

  constructor() {
    // private http: HttpClient;
   }

  //  getWorks(): Observable<Work[]> {
  //    return { };
  //    return this.http.get<Work[]>('http://upwork.com/api/profiles/v2/search/jobs.json');
  //  }
}
