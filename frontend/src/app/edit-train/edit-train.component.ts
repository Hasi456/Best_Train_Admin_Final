import { Component, OnInit } from '@angular/core';
import {DemoService} from '../service/demo.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-edit-train',
  templateUrl: './edit-train.component.html',
  styleUrls: ['./edit-train.component.css']
})
export class EditTrainComponent implements OnInit {

 
  trains:any=[];

 
  constructor(private demoservice:DemoService, private route: ActivatedRoute, private router:Router) {
   
   }
    

  ngOnInit() {
    

    let id=parseInt(this.route.snapshot.paramMap.get('id'));
     this.demoservice.getByID(id).subscribe(res => {
      this.trains = res;
    });
//  });
  
}
  
updateTrain(TrainName,Classes,id) {
  this.route.params.subscribe(params => {
    this.demoservice.updateTrain(TrainName,Classes,params.id);
    
     this.router.navigate(['train_details']);
  //  location.reload();
    
    
  });
  
}
  
}
