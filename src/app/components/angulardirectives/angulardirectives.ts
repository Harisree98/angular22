import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Highlight } from '../../Directives/highlight';

@Component({
  imports: [CommonModule,Highlight],
  selector: 'app-angulardirectives',
  styleUrl: './angulardirectives.css',
  templateUrl: './angulardirectives.html',
})
export class Angulardirectives {

  isActive:boolean = true;

  employees = [
    {
      id: 101,
      name: 'Ravi',
      department: 'IT',
      salary: 75000,
      isActive: true,
      experience: 5
    },
    {
      id: 102,
      name: 'Priya',
      department: 'HR',
      salary: 45000,
      isActive: true,
      experience: 3
    },
    {
      id: 103,
      name: 'John',
      department: 'IT',
      salary: 90000,
      isActive: false,
      experience: 7
    },
    {
      id: 104,
      name: 'Sneha',
      department: 'Finance',
      salary: 60000,
      isActive: true,
      experience: 4
    },
    {
      id: 105,
      name: 'Arjun',
      department: 'IT',
      salary: 35000,
      isActive: false,
      experience: 1
    }
  ];


  employeeList = [
  { id: 101, name: 'Ravi', status: 'Active' },
  { id: 102, name: 'Priya', status: 'On Leave' },
  { id: 103, name: 'John', status: 'Inactive' },
  { id: 104, name: 'Sneha', status: 'Active' },
  { id: 105, name: 'Arjun', status: 'Pending' }
];

employeePerformance = [
  { id: 101, name: 'Ravi', rating: 'Excellent' },
  { id: 102, name: 'Priya', rating: 'Good' },
  { id: 103, name: 'John', rating: 'Average' },
  { id: 104, name: 'Sneha', rating: 'Poor' },
  { id: 105, name: 'Arjun', rating: 'N/A' },
  { id: 105, name: 'Rahne', rating: 'Outstanding' }
];
}

  



