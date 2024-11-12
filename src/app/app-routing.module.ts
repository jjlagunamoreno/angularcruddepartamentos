import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomecomponentComponent } from './components/homecomponent/homecomponent.component';
import { CreateComponent } from './components/create/create.component';
import { DetailsComponent } from './components/details/details.component';
import { EditComponent } from './components/edit/edit.component';

const routes: Routes = [
  { path: "", component: HomecomponentComponent },
  { path: "create", component: CreateComponent },
  { path: "details/:id/:nombre/:localidad", component: DetailsComponent },
  { path: "edit/:id", component: EditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
