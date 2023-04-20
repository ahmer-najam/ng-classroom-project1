import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../interfaces/student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  studentList: Student[] = [];
  formData: Student;
  constructor(private http: HttpClient) {}

  getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>('http://localhost:3000/students');
  }

  addStudent(): Observable<Student> {
    //We created a variable namely body
    //which will be used to pass API for data insertion
    let body = { ...this.formData };

    //We have to delete id because it should be auto generated
    delete body.id;

    return this.http.post<Student>('http://localhost:3000/students', body);
  }

  updateStudent(): Observable<Student> {
    //We created a variable namely body
    //which will be used to pass API for data insertion
    let body = { ...this.formData };

    return this.http.put<Student>(
      `http://localhost:3000/students/${body.id}`,
      body
    );
  }

  deleteStudent(): Observable<Student> {
    //We created a variable namely body
    //which will be used to pass API for data insertion
    let body = { ...this.formData };

    return this.http.delete<Student>(
      `http://localhost:3000/students/${body.id}`
    );
  }
}
