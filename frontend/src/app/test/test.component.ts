import { Component, OnInit } from '@angular/core';
import{DemoService} from  '../service/demo.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  Name:String;
  class:String;

  constructor(private demoService:DemoService) { }

  ngOnInit() {
  }


  save(){
  
  const my={

    Name:this.Name,
    class:this.class
  };

//this.demoService.saveMy(my).subscribe(res=>



}


  



}
