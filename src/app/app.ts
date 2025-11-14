import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { Footer } from "./components/footer/footer";
import { Feature } from "./components/feature/feature";
import { ControlFlow } from "./components/control-flow/control-flow";
import { ParentComponent } from "./components/parent-component/parent-component";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Feature, ControlFlow, ParentComponent, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('appHello');
}
