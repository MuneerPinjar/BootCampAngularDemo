import { Injectable } from '@angular/core';

import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
readonly apiUrl = 'http://localhost:53192/api/'




  constructor(private http:HttpClient) { }

//Department
//HttpGet request to get all department list
getDepartmentList() : Observable<any[]>{
  return this.http.get<any[]>(this.apiUrl+'department/GetDepartment');
}

//Http post request in order to save the department
addDepartment(dept:any) : Observable<any[]>{
const htttOptions ={headers : new HttpHeaders({'content-Type':'application/json'})};
return this.http.post<any>(this.apiUrl+"department/AddDepartment",dept,htttOptions);

}

//HttPut request to update the department

UpdateDepartment(dept:any) : Observable<any[]>{

  const htttOptions ={headers : new HttpHeaders({'content-Type':'application/json'})};

  return this.http.put<any>(this.apiUrl+"department/UpdateDepartment",dept,htttOptions);
}

//HttpDelete request to delete the department
deleteDepartment(id : number) : Observable<number>{

  const htttOptions ={headers : new HttpHeaders({'content-Type':'application/json'})};
  return this.http.delete<number>(this.apiUrl+"department/DeleteDepartment?id="+id,htttOptions);
}


//Employee

getEmployeeList() : Observable<any[]>{
  return this.http.get<any[]>(this.apiUrl+'employee/GetEmployee');
  
}

addEmployee(emp: any): Observable<any> {
  const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  return this.http.post<any>(this.apiUrl + 'employee/AddEmployee', emp, httpOptions);
}

updateEmployee(emp: any): Observable<any> {
  const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  return this.http.put<any>(this.apiUrl + 'employee/UpdateEmployee/', emp, httpOptions);
}

deleteEmployee(id: number): Observable<number> {
  const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  return this.http.delete<number>(this.apiUrl + 'employee/DeleteEmployee?id=' + id, httpOptions);
}

getAllDepartmentNames(): Observable<any[]> {
  return this.http.get<any[]>(this.apiUrl + 'employee/GetAllDepartmentNames');
}

}
