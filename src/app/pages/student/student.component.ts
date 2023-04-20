import { StudentService } from 'src/app/services/student.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  form: FormGroup;

  constructor(public service: StudentService, private router: Router) {}
  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(0),
      name: new FormControl('', Validators.required),
      rollNumber: new FormControl('', Validators.required),
      class: new FormControl('', Validators.required),
    });

    if (this.service.formData == undefined) {
      this.resetFormData();
    }

    this.form.setValue(this.service.formData);
  }

  onSubmit() {
    this.service.formData = this.form.value;

    if (this.service.formData.id == 0) {
      this.addRecord();
    } else {
      this.updateRecord();
    }

    this.form.reset();
    this.resetFormData();
    this.router.navigate(['/']);
  }

  addRecord() {
    this.service.addStudent().subscribe((result) => {
      this.service.formData = result;
      this.service.studentList = [
        this.service.formData,
        ...this.service.studentList,
      ];
    });
  }

  updateRecord() {
    this.service.updateStudent().subscribe((result) => {
      this.service.formData = result;

      //Removing selected record from student list
      this.service.studentList = this.service.studentList.filter((student) => {
        return student.id != this.service.formData.id;
      });

      //adding new version of the record to student list
      this.service.studentList = [
        this.service.formData,
        ...this.service.studentList,
      ];
    });
  }

  onNavigateBack() {
    this.resetFormData();
    this.router.navigate(['/']);
  }

  resetFormData() {
    this.service.formData = {
      id: 0,
      name: '',
      rollNumber: '',
      class: '',
    };
  }
}
