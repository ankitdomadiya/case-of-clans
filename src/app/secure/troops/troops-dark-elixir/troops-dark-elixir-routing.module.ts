import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MinionComponent } from './minion/minion.component';
import { HogRiderComponent } from './hog-rider/hog-rider.component';
import { ValkyrieComponent } from './valkyrie/valkyrie.component';
import { GolemComponent } from './golem/golem.component';
import { WitchComponent } from './witch/witch.component';
import { LavaHoundComponent } from './lava-hound/lava-hound.component';
import { BowlerComponent } from './bowler/bowler.component';
import { IceGolemComponent } from './ice-golem/ice-golem.component';
import { HeadHunterComponent } from './head-hunter/head-hunter.component';
import { ApprenticeWarderComponent } from './apprentice-warder/apprentice-warder.component';

const routes: Routes = [
  {path:'', redirectTo:'minion', pathMatch:'full'},
  {path: 'minion',component: MinionComponent},
  {path: 'hogrider',component: HogRiderComponent},
  {path: 'valkyrie',component: ValkyrieComponent},
  {path: 'golem',component: GolemComponent},
  {path: 'witch',component: WitchComponent},
  {path: 'lavahound',component: LavaHoundComponent},
  {path: 'bowler',component: BowlerComponent},
  {path: 'icegolem',component: IceGolemComponent},
  {path: 'headhunter',component: HeadHunterComponent},
  {path: 'apprenticewarder',component: ApprenticeWarderComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TroopsDarkElixirRoutingModule { }
