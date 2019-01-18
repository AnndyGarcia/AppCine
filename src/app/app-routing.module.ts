import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';
import { PlacesComponent } from './components/places/places.component';
import { FinishComponent } from './components/finish/finish.component';

const routes: Routes = [
  { path: '', component: PlacesComponent },
  { path: 'finish', component: FinishComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
