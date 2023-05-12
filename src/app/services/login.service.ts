import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(payload: any) {
    return this.http.post('/login', payload)
  }

  getEmployee(employee_id: any) {
    return this.http.get(`/getEmployeeData?employee_id=${employee_id}`)
  }
}
