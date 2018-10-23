# [learning-ng4](https://github.com/mahavir2013/learning-ng4)

### [Tutorial: Try Angular 4](https://www.youtube.com/playlist?list=PLEsfXFp6DpzQThMU768hTZInWUqfoyTEW)
### [Github for tutorial](https://github.com/codingforentrepreneurs/Try-Angular-v4)
#### To be continued from: Try Angular v4 // 24 of 28 // Router Link & Improved Navigation

### Getting started
[Getting Started with Typescript](http://kirr.co/w0bcpk)

[Angular Setup, Install, & Build Guide](https://kirr.co/ne8vf9)

	Optional:
	npm uninstall -g @angular/cli
	npm cache clean --force

	npm install -g @angular/cli@1.4

	mkdir learning-ng4 && cd learning-ng4
	ng new client

Check versions:
- node -v, npm -v, ng -v

### App Module & Component
### Ng Generate New Component
	ng g component newComponentName
	ng g component videoList
	ng g component video-detail
### Selectors & Component
### *ngFor and *ngIf
### Mapping Urls with RouterModule
	RouterModule.forRoot(appRoutes);
- Link: https://angular.io/guide/router

### Dynamic Routing of Components
	import { ActivatedRoute } from '@angular/router';
	A provider allows us to work with route
	private route: ActivatedRoute
	this.routeSub = this.route.params.subscribe(params => {
	  console.log(params);
	});
	this.routeSub.unsubscribe();
### Safely Embed a Video
	<div [innerHTML]="'<h1>Hi There</h1>'"></div>
	<div [innerHTML]="item.embed"></div>
	import { DomSanitizer } from '@angular/platform-browser';
	this.sanitizer.bypassSecurityTrustResourceUrl(url);
### Pipes & Custom Pipes
	{{todayDate | date: 'short'}}
	[src]="getEmbedUrl(item) | safe"
	transform(value: any, args?: any): any {
		return this.sanitizer.bypassSecurityTrustResourceUrl(value);
	}
- Link: https://angular.io/guide/pipes

### Bootstrap for Angular // ngx bootstrap
	Remove# npm uninstall ngx-bootstrap --save
	Add# npm install ngx-bootstrap@2.0.5 --save
	import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
	imports: [BsDropdownModule.forRoot(),...]

	// template
	dropdown, dropdownToggle, *dropdownMenu

### ngx bootstrap carousel
	ng g component home
	import { CarouselModule } from 'ngx-bootstrap/carousel';
	imports: [CarouselModule.forRoot(),...]
	<carousel ...>
		<slide>...</slide>
	</carousel>

### Angular Click Events
	<a #imageElement href="videos/video-1" (click)="eventCallback($event, imageElement)">
	  <img class="img-main-carousel" src="assets/images/nature/4.jpg" alt="second slide">
	</a>
	import { Router } from '@angular/router';
	this.router.navigate(['./videos']);

### Http Requests
	import { HttpModule } from '@angular/http';
	imports: [HttpModule, ...]
	
	import { Http } from '@angular/http';
	private req: any;
	videoList: [any];
	
	constructor(private http: Http)
	ngOnInit() {
		this.req = this.http.get('/assets/json/videos.json').subscribe(data => {
			console.log(data.json());
			this.videoList = data.json() as [any];
		  
			data.json().filter(item => {
				if (item.slug === this.slug) {
					this.video = item;
				}
			});
		});
	}
	ngOnDestroy() {
		this.req.unsubscribe();
	}
	{{video?.name}}

### Two Way Data Binding
	import { FormsModule } from '@angular/forms';
	<input type="text" class="form-control" placeholder="Search" name="Search" [(ngModel)]="searchQuery">
If ngModel is used within a form tag, either the name attribute must be set or the form control must be defined as 'standalone' in ngModelOptions.

### ngForm Basics
	<form #myForm="ngForm" (ngSubmit)="submitForm($event, myForm)">
	<input type="text" name="q" [(ngModel)]="myModelName">
	submitSearch(event: Event, formData) {
		let query = formData.value['q'];
		if (query) {
			this.router.navigate(['/search', {q: query}]);
		}
	}
- Link: https://angular.io/guide/forms
- https://angular.io/api/forms/NgForm

### Passing Data to Components
	<the-component [passedInput]="inputBingings"></the-component>
	@Input() passedInput: string;

### Video Service
	ng g service videos/video
	import 'rxjs/add/operator/map';
	import 'rxjs/add/operator/catch';
	...
	getList() {
		return this.http.get(endpoint)
			.map(response => response.json())
			.catch(this.handleError);
	}
	private handleError(error: any, caught: any): any {
		console.log(error, caught);
	}
	@Component({
		...
		providers: [VideoService]
	})
	...
	this.req = this._video.list().subscribe(data => {
      console.log(data);
      this.videoList = data as [any];
    });

### Video Item Model
	import { TodoItem } from '../todos/todo';
	
	todoList: [TodoItem] = [] as [TodoItem];
	this.todoList = data as [TodoItem];
	todo: TodoItem
	this.todo = data as TodoItem;

### Router Link & Improved Navigation
	



































