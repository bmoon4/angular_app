import { EmployeeService } from './../data/employee.service';
import { Employee } from './../data/employee';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: Employee[];
  getEmployeesSub: any;
  loadingError: boolean = false;

  constructor(private es:EmployeeService) { }

  ngOnInit() {
  
    this.getEmployeesSub = this.es.getEmployees().subscribe(employees => {
      this.employees = employees;
    }, 
    error => {
      this.loadingError = true;
      console.log("Loading error occured: " + error);
    })

  }

  ngOnDestroy(){
    this.getEmployeesSub.unsubscribe();
  }

}
