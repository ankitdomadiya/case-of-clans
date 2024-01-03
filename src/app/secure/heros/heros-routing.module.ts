import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarbarianKingComponent } from './barbarian-king/barbarian-king.component';
import { ArcherQueenComponent } from './archer-queen/archer-queen.component';
import { GrandWardenComponent } from './grand-warden/grand-warden.component';
import { RoyalChampionComponent } from './royal-champion/royal-champion.component';

const routes: Routes = [
  {path: '', redirectTo:'barbarianking', pathMatch:'full'},
  {path: 'barbarianking', component:BarbarianKingComponent},
  {path: 'archerqueen', component:ArcherQueenComponent},
  {path: 'grandwarden', component:GrandWardenComponent},
  {path: 'royalchampion', component:RoyalChampionComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HerosRoutingModule { }
