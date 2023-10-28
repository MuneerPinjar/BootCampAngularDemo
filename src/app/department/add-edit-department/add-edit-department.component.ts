import { Component, Input, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-add-edit-department',
  templateUrl: './add-edit-department.component.html',
  styleUrls: ['./add-edit-department.component.css'],
})
export class AddEditDepartmentComponent implements OnInit {
  constructor(private service: ApiserviceService) {}

  /// From other component
  @Input() depart: any;

  DepartmentId = '';
  DepartmentName = '';

  ngOnInit(): void {
    this.DepartmentId = this.depart.DepartmentId;
    this.DepartmentName = this.depart.DepartmentName;
  }

  addDepartment() {
    var dept = {
      DepartmentId: this.DepartmentId,
      DepartmentName: this.DepartmentName,
    };

    this.service.addDepartment(dept).subscribe((res) => {
      console.log(res.toString());
      alert(res.toString());
    });
  }

  updateDepartment() {
    var dept = {
      DepartmentId: this.DepartmentId,
      DepartmentName: this.DepartmentName,
    };

    this.service.UpdateDepartment(dept).subscribe((res) => {
      console.log(res.toString());
      alert(res.toString());
    });
  }
}
