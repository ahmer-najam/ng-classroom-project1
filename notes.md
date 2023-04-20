## NOTES - ANGULAR PROJECT 1

- HOW TO CREATE INTERFACE (MODEL) it should be without '--skip-tests'
  ng g i interfaces/<name_of_interface>
- INSTALLATION OF JSON-SERVER
  npm i json-server
- WRITE FOLLOWING COMMAND IN 'Package.json' inside the 'scripts'
  "json-server": "json-server --watch studentDb.json"
- RUN JSON-SERVER
  npm run json-server

- SERVICES
  ng g s --skip-tests services/student

- # FORM DESIGNING -

* ADD 'ReactiveFormsModule' in 'app.module.ts' file by following snippet
  import { FormsModule, ReactiveFormsModule } from '@angular/forms';
  ReactiveFormsModule

* Declare FormGroup on top of the component class
  import { FormControl, FormGroup, Validators } from '@angular/forms';
  form: FormGroup;

* Add 'FormGroup' in 'ngOnInit' hook

  this.form = new FormGroup({
  id: new FormControl(0),
  name: new FormControl('', Validators.required),
  rollNumber: new FormControl('', Validators.required),
  class: new FormControl('', Validators.required),
  });

* For mapping of service formData:

  this.service.formData = {
  id: 0,
  name: '',
  rollNumber: '',
  class: ''
  }

  this.form.setValue(this.formData);

* Function for form submission

  onSubmit() {
  this.formData = this.form.value;
  console.log(this.formData);

  this.form.reset();
  }

* Form UI designing - Container

  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Student Form</h3>
      </div>
      <div class="card-content">
        <!-- Put Form here -->

      </div>

    </div>
  </div>

* Form UI designing - Form Block
  <form [formGroup]="form" (ngSubmit)="onSubmit()">
    <!-- Put Form Input Elemets here -->

  </form>

* Form UI designing - Id Element
    <div class="form-group m-2">
    <label for="id">ID</label>
    <input
      formControlName="id"
      id="id"
      name="id"
      class="form-control"
      readonly
    />
    <!-- Put Validation here -->
  </div>

* Form UI designing - Name Element
    <div class="form-group m-2">
    <label for="name">Name</label>
    <input
      formControlName="name"
      id="name"
      name="name"
      class="form-control"
      readonly
    />
    <!-- Put Validation here -->
  </div>

* Form UI designing - RollNumber Element
    <div class="form-group m-2">
    <label for="id">Roll Number</label>
    <input
      formControlName="rollNumber"
      id="rollNumber"
      name="rollNumber"
      class="form-control"
      readonly
    />
    <!-- Put Validation here -->
  </div>

* Form UI designing - Class Element
    <div class="form-group m-2">
    <label for="id">Class</label>
    <input
      formControlName="class"
      id="class"
      name="class"
      class="form-control"
      readonly
    />
    <!-- Put Validation here -->
  </div>

* Form UI designing - Submit Button
  <hr />
  <button
    type="submit"
    class="btn btn-block btn-secondary"
    style="width: 100%"
    [disabled]="!this.form.valid"
  >
    Submit
  </button>

- FORM VALIDATIONS -

---

- For name:
  <small
  \*ngIf="
  !form.get('name').valid && form.get('name').touched
  "

  > Name must be entered
  > </small>

- For rollNumber:
  <small
  \*ngIf="
  !form.get('rollNumber').valid && form.get('rollNumber').touched
  "

  > Roll Number must be entered
  > </small>

- For class:
  <small
  \*ngIf="
  !form.get('class').valid && form.get('class').touched
  "
  > Class must be entered
  > </small>
