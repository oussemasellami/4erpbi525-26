import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnonceComponent } from './annonce.component';
import { ListannComponent } from './listann/listann.component';
import { AddannComponent } from './addann/addann.component';
import { AnnonceRoutingModule } from './annonce-routing.module';

@NgModule({
  declarations: [AnnonceComponent, ListannComponent, AddannComponent],
  imports: [CommonModule, AnnonceRoutingModule],
})
export class AnnonceModule {}
