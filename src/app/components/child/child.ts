import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  imports: [],
  selector: 'app-child',
  styleUrl: './child.css',
  templateUrl: './child.html',
})
export class Child {

  @Input() name: any;
  @Output() address  = new EventEmitter();


  constructor() {
   
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
     console.log("parent to child:",this.name)
  }

   sendAddress(){
    this.address.emit("hyderabad");
   }

}
