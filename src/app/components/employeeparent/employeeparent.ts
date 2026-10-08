import { Component, QueryList, ViewChildren } from '@angular/core';
import { Employeechild } from '../employeechild/employeechild';

@Component({
  imports: [Employeechild],
  selector: 'app-employeeparent',
  styleUrl: './employeeparent.css',
  templateUrl: './employeeparent.html',
})
export class Employeeparent {


  @ViewChildren(Employeechild)
  empChild!: QueryList<Employeechild>;

highlightAll():any{
  console.log(this.empChild.length);
  this.empChild.forEach(emp=>{
    emp.highlight();
  })
}

}
