import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  price: number = 99.99;
  today: Date = new Date();

  title: string = "Home";

  counter: number = 100;

  homeLikes: number = 1000;

  showLikes: boolean = true;

  siteLikes: number;


  constructor(private dataservice: DataService) {

  }

  ngOnInit() {
    this.siteLikes = this.dataservice.siteLikes;
  }

  incrementSiteLikes() {
    this.dataservice.increment();

   this.dataservice.sitelikeSource
   .subscribe(n => {
     this.siteLikes = n;
   })
  }

  incr(e: Event) {
    console.log("event ", e)
    this.counter++;
  }

}
