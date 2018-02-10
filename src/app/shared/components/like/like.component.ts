import { Component, OnInit, OnDestroy,
                Input,
                Output,
                EventEmitter,
             } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit, OnDestroy {

@Input()
  likes: number;

  @Output()
  likesChange: EventEmitter<number> = new EventEmitter();

  constructor() { 
console.log("Like component constructor created")
  }

  ngOnInit() {
    console.log("Like component ngOnInit created")
  }

  //called just before deleting component instance
  ngOnDestroy(): void {
    console.log("Like component ngOnDestroy created")
  }

    //Two way binding Input and Output
  // output name should be input name + "Change"

  up(){
this.likesChange.emit(this.likes + 1);
  }
  down(){
    this.likesChange.emit(this.likes - 1);
      }
}
