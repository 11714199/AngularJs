import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  employeeName : any
  constructor(
    private loginService: LoginService
  ) {}
  ngOnInit(): void {
    console.log(localStorage)
    this.loginService.getEmployee(localStorage.getItem('employee_id')).subscribe(response => {
      let res : any = response;
      this.employeeName = res.data.name;
    })
  }

  welocome() {
    
  }

}
