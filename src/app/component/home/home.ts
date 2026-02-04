import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Common } from '../../common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  UserForm: any;
  UserData: any;
  constructor(private fb: FormBuilder, private service: Common) {

    this.UserForm = this.fb.group({
      id: [''],
      FirstName: [],
      LastName: [],
      DOB: [],
      Gender: [],
      Email: [],
      Phone: [],
      Subject: []
    })
    this.getdata();


  }

  submitData() {
    var type = this.UserForm.value.id ? 'Update' : 'Add';
    this.submitform(type);
  }

  submitform(type: any) {
    if (type == "Add") {
      this.service.AddData(this.UserForm.value).subscribe(data => {
        alert("Insert Successfully");
      });
    }
    else {
      this.service.UpdateData(this.UserForm.value).subscribe(data => {
        alert("Update Successfully");

      });
    }
    this.getdata();
    this.UserForm.reset();

  }

  async getdata() {
    var data = await this.service.GetData().toPromise();
    if (data) {
      this.UserData = data;
    }
  }

  async GetDetailById(id: any) {
    var data = await this.service.GetDetailById(id).toPromise();
    if (data) {
      this.UserForm.patchValue({
        id: data.id,
        FirstName: data.FirstName,
        LastName: data.LastName,
        DOB: data.DOB,
        Gender: data.Gender,
        Email: data.Email,
        Phone: data.Phone,
        Subject: data.Subject
      })
    }
  }

  async DeleteById(id:any){
    var data =await this.service.DeleteRecord(id).toPromise();
    if(data){
      alert("Delete Record");
    }
    else{
      alert("Record not exsist");
    }
  }

}
