import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/interfaces/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent implements OnInit {
  students: Student[];
  constructor() {}
  ngOnInit(): void {
    this.students = [
      { id: 101, name: 'Fahad', class: 'IT', rollNumber: 'R-00101' },
      { id: 102, name: 'Quaid', class: 'IT', rollNumber: 'R-00102' },
      { id: 103, name: 'Barrah', class: 'IT', rollNumber: 'R-00103' },
      { id: 104, name: 'Ahmer', class: 'IT', rollNumber: 'R-00104' },
    ];
  }
}
