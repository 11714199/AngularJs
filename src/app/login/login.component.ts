import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Login } from '../login';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
//import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  forgetPas: any = false;
  welcomePage: any = false;
  constructor(
    private loginService: LoginService,
    private router: Router,
    /*private cookieService: CookieService*/) {}
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked Login")
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit Login")
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked Login")
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit Login")
  }
  ngDoCheck(): void {
    console.log("ngDoCheck Login")
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy Login")
  }

  ngOnInit(): void {
    console.log("ngOnInit Login")    
  }

  ngOnChanges(): void {
    console.log("ngOnChanges Login")
  }
  login(loginForm: NgForm) {
    this.loginService.login(this.data).subscribe(response => {
      let res : any= response
      if(res.data.statusCode == 200 && res.data.status == true) {
        this.welcomePage = !this.welcomePage;
        this.router.navigate(['/welcome'])
        localStorage.setItem("employee_id",res.data.id)
        localStorage.setItem("token", res.data.token)
        //this.cookieService.set('token', res.data.token)
      } else {
        loginForm.reset();
      }
    })
  }

  forgetPassword() {
    this.forgetPas = !this.forgetPas
    this.router.navigate(['/forgetPassword'])
  }

  data: Login = {
    email : "",
    password : ""
  }
}
