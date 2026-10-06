import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-employee-skills',
  styleUrl: './employee-skills.css',
  templateUrl: './employee-skills.html',
})
export class EmployeeSkills {

 private fb = inject(FormBuilder);

  employeeForm = this.fb.group({
    name: [''],

    skills: this.fb.array([
      this.fb.control('')
    ])
  });

  get skills() {
    return this.employeeForm.controls.skills;
  }

  addSkill() {
    this.skills.push(this.fb.control(''));
  }

  removeSkill(index: number) {
    this.skills.removeAt(index);
  }

  onSubmit() {
    console.log(this.employeeForm.value);
  }

}
