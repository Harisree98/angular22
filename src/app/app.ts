import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './components/user/user';
import { Student } from './components/student/student';
import { Employee } from './components/employee/employee';
import { EmployeeSkills } from './components/employee-skills/employee-skills';
import { Parent } from './components/parent/parent';


@Component({
  imports: [Parent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('my-angular22-app');
}
