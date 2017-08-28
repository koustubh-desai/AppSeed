import { Component, OnInit } from '@angular/core';

import { Todo } from './todo';
import { TodoService } from './todo.service';
import { Router }      from '@angular/router';

@Component({
  selector: 'my-todo',
  template: `
	
    <div class="row">
		
		<div class="col-sm-8">
			<ul class="heroes list-group">
				<li *ngFor="let hero of heroes">
					<a href="javascript:;" class="list-group-item list-group-item-action"
					[class.active]="hero === selectedHero"
					(click)="onSelect(hero)">
						{{hero.name}} <span class="badge">{{hero.status}}</span>
					</a>
				</li>
			</ul>
		</div>
		
		<div class="col-sm-4">
			<div *ngIf="selectedHero">
				<hero-detail [hero]="selectedHero"></hero-detail>
			  <!--<h2>
				{{selectedHero.name | uppercase}} is {{selectedHero.status | lowercase}} 
			  </h2>
			  <button (click)="gotoDetail()">View Details</button>-->
			</div>
		</div>
    </div>
    
  `,
  styles: [`

  `],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {
  
  heroes: Todo[];
  selectedHero: Todo;

  constructor(
	private router:Router,
	private heroService: TodoService) { }

  getHeroes(): void {
    //this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    this.heroes = this.heroService.getHeroes();
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Todo): void {
    this.selectedHero = hero;
  }
  
  gotoDetail():void {
	/*this.router.navigate('/detail',this.selectedHero.id);*/
  }
}
