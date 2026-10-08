import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-employeechild',
  styleUrl: './employeechild.css',
  templateUrl: './employeechild.html',
})
export class Employeechild {

@Input() name:any;

highlight():any{
  console.log(`${this.name} is highlighted`);
}

}
