import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  constructor(private http: HttpClient) {}

  getEmployees() {
    return this.http.get('http://dummy.restapiexample.com/api/v1/employees');
  }
  getEmployeeData(id){
    return this.http.get(`http://dummy.restapiexample.com/api/v1/employee/${id}`);
  }
}
