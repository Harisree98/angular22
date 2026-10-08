// import { Component, QueryList, ViewChildren } from '@angular/core';
// import { Accordionchildren } from '../accordionchildren/accordionchildren';

// @Component({
//   imports: [Accordionchildren],
//   selector: 'app-accordionparent',
//   // styleUrl: './accordionparent.css',
//   templateUrl: './accordionparent.html',
// })
// export class Accordionparent {
//   @ViewChildren(Accordionchildren) accordionChilds!: QueryList<Accordionchildren>

//   openAll() {
//     console.log(this.accordionChilds);
//   console.log(this.accordionChilds.length);
//     this.accordionChilds.forEach(child => {
//       console.log(child.title)
//       child.open();
//     })
//   }

//   closeAll() {
//     this.accordionChilds.forEach(child => {
//       child.close();
//     })
//   }
// }

import {
  AfterViewInit,
  Component,
  QueryList,
  ViewChildren
} from '@angular/core';

import { Accordionchildren } from '../accordionchildren/accordionchildren';

@Component({
  selector: 'app-accordionparent',
  imports: [Accordionchildren],
  templateUrl: './accordionparent.html'
})
export class Accordionparent implements AfterViewInit {

  @ViewChildren(Accordionchildren)
  accordionChildren!: QueryList<Accordionchildren>;

  ngAfterViewInit(): void {
    console.log(
      'Number of accordions:',
      this.accordionChildren.length
    );
  }

  openAll() {

    this.accordionChildren.forEach(child => {
      child.open();
    });

  }

  closeAll() {
    console.log('CLOSE ALL');
    this.accordionChildren.forEach(child => {
      child.close();
    });

  }
}
