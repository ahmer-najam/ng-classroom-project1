import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/interfaces/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent implements OnInit {
  students: Student[];
  constructor(public studentService: StudentService, private router: Router) {}

  ngOnInit(): void {
    this.studentService.getAllStudents().subscribe((list) => {
      this.studentService.studentList = list;
    });
  }

  navigateToForm() {
    this.router.navigate(['/student-form']);
  }

  onRowSelection(row: Student) {
    this.studentService.formData = row;
    this.router.navigate(['/student-form']);
  }

  onDelete(student) {
    this.studentService.formData = student;
    //calling delete api
    this.studentService.deleteStudent().subscribe((result) => {
      //Removing data from service student list
      this.studentService.studentList = this.studentService.studentList.filter(
        (record) => {
          return record.id != student.id;
        }
      );
    });
  }
}
