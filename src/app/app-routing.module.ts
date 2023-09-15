import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginViewComponent } from './shared/login-view/login-view.component';
import { CrudHomeComponent } from './views/crud-home/crud-home.component';

const routes: Routes = [
  {path:'', component: LoginViewComponent},
  {path:'crud', component: CrudHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
