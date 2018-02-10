import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
members: string[] = ['jeni', 'looper'];
show: boolean = true;
name: string ;

  constructor() { }

  ngOnInit() {
  }
addMember(){
this.members.push(this.name);
this.name= "";
}
empty(){
  this.members = [];
}

}
