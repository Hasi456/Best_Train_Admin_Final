import { Injectable } from '@angular/core';
import {Http,Headers,Response} from '@angular/http';
import{Router} from '@angular/router';
import 'rxjs/add/operator/map';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
@Injectable({
  providedIn: 'root'
})
export class DemoService {

  

  constructor(
    private http:Http,
    private router:Router
  ) { 

  }

  
  saveTrain(train){

    let header=new Headers();
    header.append('Content-Type','application/json');

    return this.http.post("http://localhost:3000/user/addTrain",train,{headers:header}).map(res=>res.json());
  }

  getAllTrains(){
    
    return this.http.get("http://localhost:3000/user/train_details").map((res:Response)=>res.json());
    
  }

  getByID(id){
    
  console.log(id)
    return this.http.get("http://localhost:3000/user/findTrain/"+id).map((res:Response)=>res.json());

  
  }

 deleteByID(id){
  
 return this.http.get("http://localhost:3000/user/deleteTrain/"+id);

 }

 updateTrain(TrainName,Classes,id) {
  const obj = {
    TrainName,
    Classes
  }

  let header=new Headers();
    header.append('Content-Type','application/json');
  console.log(id);
  this.http.post("http://localhost:3000/user/edit_train/"+id, obj,{headers:header}).subscribe(res => console.log('Done'));
  
  }



  saveTrainS(trainS){

      let header=new Headers();
      header.append('Content-Type','application/json');
  
      return this.http.post("http://localhost:3000/user/addTrainSch",trainS,{headers:header}).map(res=>res.json());
    }
  


  getAllTrainsS(){
   
    return this.http.get("http://localhost:3000/user/train_schedule").map((res:Response)=>res.json());
    
  }

  getSByID(id){
   
 console.log(id)
   return this.http.get("http://localhost:3000/user/findTrainS/"+id).map((res:Response)=>res.json());

 
 }

  deleteSByID(id){
   
   return this.http.get("http://localhost:3000/user/deleteTrainS/"+id);
  
   }



   updateTrainS(TrainName,TrainType,Classes,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday,StartStation,EndStation,id) {
    const obj = {
      TrainName,
      TrainType,
      Classes,
      Monday,
      Tuesday,
      Wednesday,
      Thursday,
      Friday,
      Saturday,
      Sunday,
      StartStation,
      EndStation
      
    }
    console.log(id);
    let header=new Headers();
    header.append('Content-Type','application/json');
    this.http.post("http://localhost:3000/user/edit_trainS/"+id, obj,{headers:header}).subscribe(res => console.log('Done'));
    
    }
/*
    saveMy(My){

      let header= new Headers();

      header.append('Content-Type','application/json');

    return   this.http.post("http://localhost:3000/user/saveMy",My,{headers:header}).map(res=>res.json);


    }


*/


 }


