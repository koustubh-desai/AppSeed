import { Injectable } from '@angular/core';

import { Todo } from './todo';
import { ACTIVITES } from './mock-todo';

@Injectable()
export class TodoService {
  /*getHeroes(): Promise<Todo []> {
    return Promise.resolve(ACTIVITES);
  }*/
  getHeroes(): Todo[] {
    return ACTIVITES;
  }
  getAllTasks(): Promise<Todo []>{
	return Promise.resolve(ACTIVITES)
  }
  getTask(id:number): Promise<Todo> {
		return this.getAllTasks().then(tasks => tasks.find(task => task.id === id));
  }
}
