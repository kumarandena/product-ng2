import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';

@Injectable()
export class DataService {

  siteLikes: number = 1000000;

  sitelikeSource: Subject<number> = new Subject;

  constructor() {
    console.log("Data service created")
  }
  increment() {
    this.siteLikes++;
    
    //publish
    this.sitelikeSource.next(this.siteLikes);
  }
}
