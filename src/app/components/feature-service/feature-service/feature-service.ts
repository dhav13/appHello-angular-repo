import { Component } from '@angular/core';
import { ComponentA } from "../component-a/component-a";
import { ComponentB } from "../component-b/component-b";

@Component({
  selector: 'app-feature-service',
  imports: [ComponentA, ComponentB],
  templateUrl: './feature-service.html',
  styleUrl: './feature-service.css',
})
export class FeatureService {

}
