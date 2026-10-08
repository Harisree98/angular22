import { Component, ElementRef, ViewChild, } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-heading',
  styleUrl: './heading.css',
  templateUrl: './heading.html',
})
export class Heading {

  @ViewChild('heading') heading!: ElementRef;

  changeHeading(){
    console.log("heading",this.heading);
    this.heading.nativeElement.style.color="red";
    this.heading.nativeElement.textContent = "Hello"
  }
}
