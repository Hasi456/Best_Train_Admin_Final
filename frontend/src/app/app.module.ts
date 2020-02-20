import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {DemoService} from './service/demo.service';
import { TrainDetailsComponent } from './train-details/train-details.component';
import { AddTrainComponent } from './/add-train/add-train.component';
import { EditTrainComponent } from './edit-train/edit-train.component';
import { RegisterComponent } from './register/register.component';
import {AuthService} from './auth.service';
import { AddTrainScheduleComponent } from './add-train-schedule/add-train-schedule.component';
import { UpdateTrainScheduleComponent } from './update-train-schedule/update-train-schedule.component';
import { TrainScheduleComponent } from './train-schedule/train-schedule.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TestComponent } from './test/test.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TrainDetailsComponent,
    AddTrainComponent,
    EditTrainComponent,
    RegisterComponent,
    AddTrainScheduleComponent,
    UpdateTrainScheduleComponent,
    TrainScheduleComponent,
    HomepageComponent,
    TestComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,

  ],
  providers: [DemoService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
