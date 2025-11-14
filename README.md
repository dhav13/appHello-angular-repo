## 1. Installation
- Installing Node.js & Angular CLI  
- Creating a new project using ng new  
- Folder structure overview  
- Running the app using ng serve  
---
## 2. Component

- What is a component and its role  
- What is a standalone component  
- Command to create a component  
- Purpose of class, template, and style files  
- Component lifecycle hooks (ngOnInit, ngOnChanges, ngAfterViewInit, etc.)  
- Component encapsulation (ViewEncapsulation)  -- isolated comnponent, example - product component will have only product related details
- Change Detection (default vs OnPush) — (advanced) 

---
## 3. Data Binding
- Interpolation ({{ }})  
- Property Binding ([property]="value")  
- Event Binding ((event)="handler()")  
- Two-way Binding ([(ngModel)])  
- Difference between One-way and Two-way Binding  
---
## 4. Control Flow in Templates
- @if, @else if, @else, @switch, @case  
- @for, @empty and usage of track, index, first, last, even, odd
- interface
---
## 5. Property Binding
- Binding dynamic attributes and classes  
- [class.active], [style.color], [attr.aria-label]
---
## 6. Event Handling
- Common DOM events (click, blur, focus, keyup, keydown, mouseover, etc.)  
- Event object $event  
- Custom event handling with EventEmitter  
---
## 7. Composing Components
- Using selectors to nest child components  
- Reusability and separation of concerns  
---
## 8. Data Sharing Between Components
- *Parent → Child* using @Input()  
- *Child → Parent* using @Output() and EventEmitter  

---
## 9. @defer, @placeholder, and @loading
- Deferred loading of components  
- Improving performance and reducing initial bundle size  
---
## 10. NgOptimizedImage Directive 
- Lazy loading images  
- Automatic resizing and optimization  
---
## 11. Routing
- How Angular Router works  
- Defining routes  
- Integrating in app.config.ts (for standalone apps)  
- <router-outlet>  
- routerLink and routerLinkActive 
- Navigation using Router.navigate()  
- Route parameters and ActivatedRoute  
- Query parameters and Query
- Lazy Loading routes  
- Route Guards (CanActivate, CanDeactivate)  //future
---
## 12. Forms
### Template-Driven Forms
- ngModel, ngForm, and built-in validators  
### Reactive Forms
- FormControl, FormGroup, FormBuilder  
- Custom validators (sync & async)  
- Error handling and form status  
- Dynamic forms (optional)  
---
## 13. Services
- What are services and why use them  
- Dependency Injection and hierarchy (providedIn: 'root')  
- Avoiding circular dependencies  
- Using services in components  
- Singleton behavior and testing services
---
## 14. Pipes & Directives
### Pipes
- Built-in Pipes (date, uppercase, currency, etc.)  
- Custom Pipes (pure vs impure)
### Directives
- Built-in Directives (ngIf, ngFor, ngClass, ngStyle)  
- Custom Directives (attribute & structural)  
---
## 15. Modules (for legacy projects before standalone)
- What is a module and its purpose (@NgModule)  
- Difference between AppModule and feature modules  
- When to prefer standalone vs modular approach  
---

## 16. Lifecycle Hooks
- Order of execution  
- Common hooks: ngOnInit, ngOnChanges, ngAfterViewInit, ngOnDestroy

## 17. Services
- Sharing data using *Services* (state sharing)
- Serive will got keep data(washout) when refresh, so regain the same data.

---
## 18. HTTP & APIs
- Observable,Observer,Subscriber
- Using HttpClientModule  
- GET, POST, PUT, DELETE methods  
- Handling observables with RxJS  
- Error handling with interceptors  
- Async pipe (| async)
- Auth Guard need to add in point
- Session & Local Storage

---
## 19. Subject & BehaviouSubject

---
## 20. Signals & Component Signals
- Signals, Computed Signals, Linked Signals

---
## 21. Bonus (Future Topics)
- Signals API  
- State management (@ngrx/store)  
- Lazy loading + preloading strategies  
- Route resolvers  
- Standalone configuration patterns  
- Unit Testing (Components, Services, Pipes)