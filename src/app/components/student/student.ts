import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { log } from 'console';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-student',
  styleUrl: './student.css',
  templateUrl: './student.html',
  standalone: true
})
export class Student {

  studentForm = new FormGroup({
    firstName: new FormControl('',[Validators.required]),
    lastName: new FormControl(''),
    email: new FormControl('')
  })

submitStudentForm(){
  if(this.studentForm.invalid){
   this.studentForm.markAllAsTouched();
   return;
  } else{
    console.log("valid form",this.studentForm)
    console.log("the name is",this.studentForm.value?.firstName)
  }
}
}
