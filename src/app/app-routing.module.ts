import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomecomponentComponent } from './components/homecomponent/homecomponent.component';
import { CreateComponent } from './components/create/create.component';

const routes: Routes = [
  { path: "", component: HomecomponentComponent },
  { path: "create", component: CreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
