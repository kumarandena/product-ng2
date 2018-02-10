import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HighlightDirective } from '../../shared/directives/highlight.directive';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
@ViewChild("addr")
inputElement: ElementRef;

@ViewChild("address")
addressElement: ElementRef;

@ViewChild("myHighlight")
highlightDir: HighlightDirective;

// contactTime: any = { start: 9, end:5 }
contactTime:any = null;
constructor() { }

  ngOnInit() {
    //viewchild is binded
    this.addressElement.nativeElement.textcontent = 'Guindy, chennai';
    this.inputElement.nativeElement.focus();

    setTimeout(() =>{
this.contactTime = {start : 5, end: 9 }
    });

    this.highlightDir.setNewColor('red')
  }


}
