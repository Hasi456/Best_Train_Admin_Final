import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  constructor(private authservice:AuthService) { }

  ngOnInit() {
  }

  onSubmit(form:NgForm){
  
   const email=form.value.email;
   const password=form.value.password;
   const cpassword=form.value.cpassword;

if(password==cpassword){

 this.authservice.signUp(email,password);
}else{
  alert("PASSWORD DOES NOT MATCH!!")
}
  }



}
