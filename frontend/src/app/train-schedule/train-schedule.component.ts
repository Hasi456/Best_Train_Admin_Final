import { Component, OnInit } from '@angular/core';
import {DemoService} from '../service/demo.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-train-schedule',
  templateUrl: './train-schedule.component.html',
  styleUrls: ['./train-schedule.component.css']
})
export class TrainScheduleComponent implements OnInit {


  trainschedule:any=[];


  constructor(private demoService:DemoService, private router:Router) { }

  ngOnInit() {
   
   this.demoService.getAllTrainsS().subscribe((data)=>{

      this.trainschedule=data;
      console.log(data);
      


      
    });
}

deleteTrainS(id){
  if(confirm("Are you sure you want to delete!!")){
  this.demoService.deleteSByID(id).subscribe(res => {
    console.log('Deleted');
    this.ngOnInit();
  
});
}
}
}