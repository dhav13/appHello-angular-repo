import { AfterContentInit, AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ChildComponent } from '../child-component/child-component';
import { Child2Component } from '../child2-component/child2-component';

@Component({
  selector: 'app-parent-component',
  imports: [ChildComponent, Child2Component],
  templateUrl: './parent-component.html',
  styleUrl: './parent-component.css',
})
export class ParentComponent implements OnInit {
  header = 'Parent Component'
  msgTransfer: string = ""
  msgTransferTocilld2: string = ""

  msgFromChild1forChild2:string = ""

  notificationCounter:number = 0

  ngOnInit(): void {
    console.log("Parent OnInit:", this.msgTransfer)
  }

  updateMsgFromChild1(){
    this.msgTransfer = "Msg getting update from click 1 of child 1"
  }

  updateMsgFromChild2(){
    this.msgTransferTocilld2 = "Msg getting update from click 2 of child 2"
  }

  setData(event: number){
    this.notificationCounter = this.notificationCounter + event
    console.log("Coming from child 1 counter", event)
  }
  
  sendToChild2Data(event: string){
    this.msgFromChild1forChild2 = event
    console.log("Coming from child 1 counter to Child 2", event)
  }
}
