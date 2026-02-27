import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AnnonceComponent } from './annonce.component';
import { ListannComponent } from './listann/listann.component';
import { AddannComponent } from './addann/addann.component';

const routes: Routes = [
  {
    path: '',
    component: AnnonceComponent,
    children: [
      { path: 'listann', component: ListannComponent },
      { path: 'addann', component: AddannComponent },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnnonceRoutingModule {}
