import { Component, OnInit } from '@angular/core';
import{NgForm} from '@angular/forms';
import{AuthService} from '../auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private authservice:AuthService) { }

  ngOnInit() {
  }


  onSubmit(form:NgForm){

    const email=form.value.email
  

    this.authservice.resetPassword(email)
  }
}
