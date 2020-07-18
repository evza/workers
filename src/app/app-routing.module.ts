import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmplsListComponent } from './empls-list/empls-list.component';
import { EmplComponent } from './empl/empl.component';
import { NoFoundComponent } from './no-found/no-found.component';

const routes: Routes = [
  { path: 'empls', component: EmplsListComponent },
  { path: 'home', component: EmplsListComponent },
  { path: '', component: EmplsListComponent },
  { path: ':key', component: EmplComponent },
  { path: '404', component: NoFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
