import { Component } from '@angular/core';
 
@Component({
  selector: 'my-todo',
  template: `
    <div class="jumbotron text-center">
		<h1>{{title}}</h1>
		<h2>My List of activities</h2>
    </div>
    <div class="row">
		
		<nav class="btn-group-vertical col-sm-4" id="navigation">
			<h2 class="text-center">Navigation Menu</h2>
			<a class="btn btn-primary btn-lg" routerLink="/list">List</a>
			<a class="btn btn-primary btn-lg" routerLink="/dashboard">Dashboard</a>
		</nav>
		<div class="col-sm-8">
			<router-outlet></router-outlet>
		</div>
    </div>
  `
})
export class AppComponent {
  title = 'My todo List application';
}
