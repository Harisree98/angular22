import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-employee',
  styleUrl: './employee.css',
  templateUrl: './employee.html',
})
export class Employee {

  private fb = inject(FormBuilder);
  employeeForm = this.fb.group({
    firstName:['',Validators.required],
    lastName:[''],
    email:['',[Validators.required,Validators.email]]
  })

  onSubmitEmployeeForm(){
    if(this.employeeForm.invalid){
      this.employeeForm.markAllAsTouched();
      console.log("invalid form");
    } else{
      console.log("valid form",this.employeeForm);
    }
  }

  resetForm(){
    this.employeeForm.reset;
  }
}
