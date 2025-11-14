import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child2-component',
  imports: [],
  templateUrl: './child2-component.html',
  styleUrl: './child2-component.css',
})
export class Child2Component {
@Input() reciverMsgChild2: string = "default"
@Output() outputCounterToParentC2 = new EventEmitter<number>();

@Input() reciverMsgfromChild1: string = "default"

  header = 'Child Two'
  ngOnChanges(changes: SimpleChanges): void {
    console.log("Child 2 Onchanges", changes)
  }

  ngOnInit(): void {
    console.log("Child 2 OnInit:")
  }

  sendDataToParent(){
    this.outputCounterToParentC2.emit(1)
    console.log("Child 2 to Parent button clicked")
  }
}
