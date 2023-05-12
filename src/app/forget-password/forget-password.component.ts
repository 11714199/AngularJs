import { Component, ContentChild, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { forgetPassword } from '../forgetPassword';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit, OnChanges, OnDestroy, DoCheck {
  constructor() {

  }
  @Input() email: any;
  @ContentChild('') greeting: any
  data: forgetPassword = {
    email : ''
  }

  ngDoCheck(): void {
    console.log("ngDocheck Forget Password")
  }
  
  ngOnDestroy(): void {
    console.log("ngOnDestroy Forget Password")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    console.log("ngOnChanges Forget Password")
  }

  ngOnInit(): void {
    console.log(this.email, this.greeting)
    console.log("ngOnInit Forget Password")
  }

  forgetPassword(form: any) {
    console.log(this.data)
  }
  
}
