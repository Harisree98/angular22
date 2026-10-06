import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@Component({
  imports: [FormsModule, CommonModule,MatButtonModule,MatFormFieldModule,MatInputModule], 
  selector: 'app-user',
  standalone: true,
  styleUrl: './user.css',
  templateUrl: './user.html',
})
export class User {

  user = {
    name:"",
    email:""
  }
  onClickSubmit(form:any){
    console.log(form.value)
  }
}
