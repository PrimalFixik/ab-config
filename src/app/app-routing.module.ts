import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ExperimentsComponent} from "./feature/components/experiments/experiments.component";

const routes: Routes = [
  {
    path: '',
    component: ExperimentsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
