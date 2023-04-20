import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './pages/student-list/student-list.component';
import { StudentComponent } from './pages/student/student.component';

const routes: Routes = [
  { path: '', component: StudentListComponent },
  { path: 'student-form', component: StudentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
