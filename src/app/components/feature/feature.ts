import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ControlFlow } from '../control-flow/control-flow';

@Component({
  selector: 'app-feature',
  imports: [
    CommonModule, 
    FormsModule, 
    //ControlFlow
  ],
  templateUrl: './feature.html',
  styleUrl: './feature.css',
})
export class Feature implements OnInit {
  now = new Date();

  currencyDemo: number = 10000;

  featureName = "Dhaval is good boy!"
  defaultEmail = "dhava@angular.com"
  constructor(){
    this.featureName = "Construcor calling";
    console.log("constructor in is called");
  }

  ngOnInit(): void {
    this.featureName = "Shreyas is my mentor!!"
    console.log("ngOn in is called");

    console.log("OG Date - ", this.now);
  }

  updateFeatureName(event:Event){
    this.featureName = "We are learning Angulr!!"
    console.log("updateFetaure method in is called")
    console.log(event.type)
  }

  updateEmail(event:Event){
    this.defaultEmail = "updateEmailfunction@gmail.com!!"
    console.log("update Email method", event)
    console.log(event.timeStamp)
  }
  updateEmailonblur(event:Event){
    this.defaultEmail = "updateblur@gmail.com"
    console.log("blur method called", event)
    console.log(event.timeStamp)
  }
}
