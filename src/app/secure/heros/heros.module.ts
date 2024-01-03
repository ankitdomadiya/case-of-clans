import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HerosRoutingModule } from './heros-routing.module';
import { BarbarianKingComponent } from './barbarian-king/barbarian-king.component';
import { ArcherQueenComponent } from './archer-queen/archer-queen.component';
import { GrandWardenComponent } from './grand-warden/grand-warden.component';
import { RoyalChampionComponent } from './royal-champion/royal-champion.component';
import { HerosComponent } from './heros.component';


@NgModule({
  declarations: [
    BarbarianKingComponent,
    ArcherQueenComponent,
    GrandWardenComponent,
    RoyalChampionComponent,
    HerosComponent
  ],
  imports: [
    CommonModule,
    HerosRoutingModule
  ]
})
export class HerosModule { }
