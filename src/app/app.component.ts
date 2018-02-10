import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  appTitle = 'Product App';

  constructor(){

  }
  ngOnInit(): void {
  }
  
  //listener
  onEmail(email: string){
alert(email)
  }
}
