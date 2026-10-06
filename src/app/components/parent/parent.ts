import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Child } from '../child/child';

@Component({
  imports: [Child],
  selector: 'app-parent',
  styleUrl: './parent.css',
  templateUrl: './parent.html',
})
export class Parent implements AfterViewInit{

  @ViewChild(Child)private childComp: any;

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.childComp.setAddress("Calcutta");
  }

  getAddress(e: any) {
    console.log(e);
  }




}
