import { Component } from '@angular/core';
import { userInfomation } from './model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-control-flow',
  imports: [CommonModule],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
})
export class ControlFlow {

flag = false
divFlag = true

  user : userInfomation = {
    id: 4,
    name: "William bob",
    email: "williams.bob@example.com",
    isActive: false
  }
 users: userInfomation[] = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    isActive: true
  },
  {
    id: 2,
    name: "Bob Williams",
    email: "bob.williams@example.com",
    isActive: false
  },
  {
    id: 3,
    name: "Charlie Brown",
    email: "charlie.brown@example.com",
    isActive: true
  },
  {
    id: 4,
    name: "Charlie Brown",
    email: "charlie.brown@example.com",
    isActive: true
  },
  {
    id: 5,
    name: "Charlie Brown",
    email: "charlie.brown@example.com",
    isActive: false
  },
  {
    id: 6,
    name: "Charlie Brown",
    email: "charlie.brown@example.com",
    isActive: true
  }
];

cars:string[] = ["Maruti","Mahindra","TATA"]
name = "Talking about cars"
scores:number[] = [1,2,3,4,5]

emptyIdea : userInfomation[] = []



}