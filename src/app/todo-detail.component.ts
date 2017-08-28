import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'hero-detail',
  template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
      <button (click)="goBack()">Back</button>
    </div>
  `
})
export class TodoDetailComponent implements OnInit {
  @Input() hero: Todo;
  
  constructor(
	private todoService: TodoService,
	private route: ActivatedRoute,
	private location: Location
  ){}
  
  ngOnInit():void {
	this.route.paramMap
		.switchMap((params: ParamMap) => this.todoService.getTask(+params.get('id')))
		.subscribe(hero => this.hero = hero);
  }
  goBack():void{
	this.location.back();
  }
}
