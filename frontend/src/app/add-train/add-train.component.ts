import { Component, OnInit } from '@angular/core';
import {DemoService} from '../service/demo.service';

import { from } from 'rxjs';



@Component({
  selector: 'app-add-train',
  templateUrl: './add-train.component.html',
  styleUrls: ['./add-train.component.css']
})
export class AddTrainComponent implements OnInit {

 
  TrainName:String;
  Classes:String;
  
  constructor(
    private demoService:DemoService,
  ) { 

  }

  ngOnInit() {
  }

  save(){

    const train={
      TrainName:this.TrainName,
      Classes:this.Classes,
      
    };

    console.log(train);

    

     this.demoService.saveTrain(train).subscribe(res=>{
       console.log(res);
     //  if(res.state)
       //this.FlashMessage.show('Failed to insert', { cssClass: 'alert-dander', timeout: 2000 });
    //   alert("Failed to Insert");
      // else
       //this.FlashMessage.show('Added Successfully', {cssClass:'alert-success', timeout:2000});
      if(res.state){
        alert('Data Inserted!');
      }
        else{
        alert('data not inserted');
        }
     });
     
  }

}

