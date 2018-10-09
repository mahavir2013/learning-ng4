# learning-ng4: https://github.com/mahavir2013/learning-ng4

### [Tutorial: Try Angular 4](https://www.youtube.com/playlist?list=PLEsfXFp6DpzQThMU768hTZInWUqfoyTEW)
### [Github for tutorial](https://github.com/codingforentrepreneurs/Try-Angular-v4)
#### To be continued from: Try Angular v4 // 13 of 28 // ngx bootstrap carousel

### Getting started
[Getting Started with Typescript](http://kirr.co/w0bcpk)

[Angular Setup, Install, & Build Guide](https://kirr.co/ne8vf9)

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
- Link: https://angular.io/guide/router

	RouterModule.forRoot(appRoutes);

### Dynamic Routing of Components
	import { ActivatedRoute } from '@angular/router';
	A provider allows us to work with route
	this.route.params.subscribe(params => {
	  console.log(params);
	});
### Safely Embed a Video
	<div [innerHTML]="'<h1>Hi There</h1>'"></div>
	<div [innerHTML]="item.embed"></div>
	import { DomSanitizer } from '@angular/platform-browser';
	this.sanitizer.bypassSecurityTrustResourceUrl(url);
### Pipes & Custom Pipes
- Link: https://angular.io/guide/pipes
- {{todayDate | date: 'short'}}
- [src]="getEmbedUrl(item) | safe"
	
	transform(value: any, args?: any): any {
	
		return this.sanitizer.bypassSecurityTrustResourceUrl(value);
		
	}
### Bootstrap for Angular // ngx bootstrap
	npm install ngx-bootstrap --save
	import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
	imports: [BsDropdownModule.forRoot(),...]

	// template
	dropdown, dropdownToggle, *dropdownMenu

### ngx bootstrap carousel
ng g component home






















