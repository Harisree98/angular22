import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-headingchild',
  styleUrl: './headingchild.css',
  templateUrl: './headingchild.html',
})
export class Headingchild {

  @ViewChildren('item') items!: QueryList<ElementRef>

  changeColor() {
    //to manipulate all items at once
    /*     this.items.forEach(item => {
      item.nativeElement.style.fontWeight = 'bold';
      item.nativeElement.style.color = 'red';
    }) */


    //to manipulate a single item
    const item = this.items.find(i=>i.nativeElement.textContent === 'Angular');
    if(item){
      item.nativeElement.style.color="orange";
    }
  }
}
