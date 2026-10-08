import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Child } from '../child/child';

@Component({
  imports: [Child],
  selector: 'app-parent',
  styleUrl: './parent.css',
  templateUrl: './parent.html',
})
export class Parent implements AfterViewInit{

  @ViewChild(Child) private childComp:any;

  ngAfterViewInit(): void {
    this.childComp.setGreeting("How are you?");
  }

  getAddress(e: any) {
    console.log(e);
  }
}
