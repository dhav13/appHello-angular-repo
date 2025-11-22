import { Component } from '@angular/core';
import { ComponentA } from "../component-a/component-a";
import { ComponentB } from "../component-b/component-b";

@Component({
  selector: 'app-feature-signals',
  imports: [ComponentA, ComponentB],
  templateUrl: './feature-signals.html',
  styleUrl: './feature-signals.css',
})
export class FeatureSignals {

}
