import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { FormConfigComponent } from './form-config/form-config.component';
import { ShellComponent } from './shell/shell.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent
  },
  {
    path: 'shell',
    component: ShellComponent
  },
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: 'form',
    component: FormConfigComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
