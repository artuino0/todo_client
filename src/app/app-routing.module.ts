import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {
    path: 'start',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  { path: 'to-do', component: TodoComponent },
  { path: '', redirectTo: '/start', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
