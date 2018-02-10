import {
  Component, OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  highlight: boolean = false;
  @Input()
  year: number;

  // @Input("x-company") 
  @Input()
  company: string;

  //output for event binding only
  @Output()
  emailEvent: EventEmitter<string> = new EventEmitter();

  siteLikes: number;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.siteLikes = this.dataService.siteLikes;

    this.dataService
      .sitelikeSource
      .subscribe(n => {
        this.siteLikes = n;
      });

    console.log("year type " + typeof this.year)
  }

  email() {
    //(Custom) event binding
    this.emailEvent.emit('angular@gmail.com');
  }

}
