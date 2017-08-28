import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { TodoComponent } from './todo.component';
import { TodoDetailComponent} from './todo-detail.component';

const routes: Routes  = [
		{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
		{ path:'list', component: TodoComponent },
		{ path: 'dashboard', component: DashboardComponent },
		{ path: 'detail/:id', component: TodoDetailComponent }
	];

@NgModule({
	imports:[ RouterModule.forRoot(routes) ],
	exports:[ RouterModule ]
})
export class AppRoutingModule {}
