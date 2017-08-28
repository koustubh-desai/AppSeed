import { Component, OnInit } from '@angular/core';

import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'my-dashboard',
  template: `<h3>Top Activities:</h3>
	<a *ngFor="let hero of activities"  [routerLink]="['/detail', hero.id]"  class="btn btn-primary btn-lg dashboard-items">{{hero.name}}</a>
  `
}) 
export class DashboardComponent implements OnInit { 
	activities: Todo[] = [];
	constructor(private todoService:TodoService){}
	ngOnInit():void{
		this.activities = this.todoService.getHeroes().slice(1,5);
	}
}
