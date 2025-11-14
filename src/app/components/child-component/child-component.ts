import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-component',
  imports: [],
  templateUrl: './child-component.html',
  styleUrl: './child-component.css',
})
export class ChildComponent implements OnChanges {
  //@Input() reciverMsgChild1: string | null = null
  @Input() reciverMsgChild1: string = "default"
  @Output() outputCounterToParentC1 = new EventEmitter<number>();

  @Output() outputCounterForChild2FromParent = new EventEmitter<string>();
  
  header = 'Child One'
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log("Child 1 Onchanges", changes)
  }

  ngOnInit(): void {
    console.log("Child 1 OnInit:")
  }
  
  sendDataToParent(){
    this.outputCounterToParentC1.emit(1)
    console.log("Child 1 to Parent button clicked")
  }

  sendDataToChild2viaParent(){
    this.outputCounterForChild2FromParent.emit("This is coming from Child 1")
    console.log("Child 1 to Child 2 button clicked")
  }
  

}
